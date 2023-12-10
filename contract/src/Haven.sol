// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AutomationCompatible} from "../node_modules/@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";
import {PriceConverter} from "./PriceConverter.sol";


contract Haven is AutomationCompatible{

    using PriceConverter for uint;
    
    uint public s_propertyId;
    uint public lastTimeStamp;
    uint public constant MONTHS = 30 days;
    uint public constant DAY = 1 days;

    //------------------------------------Mappings & enums------------------------------------//
    mapping(uint => Property) public s_properties;
    mapping(address => Account) public s_accounts;

    enum PropertyStatus {Available, Requested, Occupied}

    //-----------------------------------------Structs-----------------------------------------//

    struct Account {
        string firstName;
        string lastName;
        address account;
        bool isRefugee;
    }


    struct Property {
        uint id;
        uint price;
        uint months;
        PropertyStatus status;
        uint startRentTime;
        address currentRefugee;
        address owner;  
    }

    //---------------------------------------Constructor---------------------------------------//
    constructor() {
        lastTimeStamp = block.timestamp;
    }

    //-----------------------------------------Events------------------------------------------//
    event AccountCreated(Account account);
    event PropertyListed(Property property);
    event PropertyStatusChanged(PropertyStatus status);
    event DonationReceived(address donor, uint amount);
    event RentTimeEnded(string message);

    //----------------------------------------Modifiers----------------------------------------//

    modifier propertyIsAvailable(uint _id) {
        require(s_properties[_id].status == PropertyStatus.Available, "Property is not available.");
        _;
        
    }

    modifier propertyIsRequested(uint _id) {
        require(s_properties[_id].status == PropertyStatus.Requested, "Property is not requested.");
        _;
        
    }

    modifier onlyRefugee() {
        require(s_accounts[msg.sender].isRefugee, "You are not a refugee.");
        _;
    }

    modifier onlyPropertyOwner() {
        require(!s_accounts[msg.sender].isRefugee, "You are not an owner.");
        _;
    }


    //----------------------------------------Functions-----------------------------------------//

    function createAccount(string memory _firstName, string memory _lastName, bool _isRefugee) public {
        Account memory account = Account(_firstName, _lastName, msg.sender, _isRefugee);

        // add refugee to s_accounts mapping
        s_accounts[msg.sender] = account;

        //event: AccountCreated
        emit AccountCreated(account);

    }

    function getAccount(address _address) public view returns(Account memory) {
        return s_accounts[_address];
    }


    function listProperty(uint _price, uint _months) public onlyPropertyOwner{
        Property memory property = Property({
            id: s_propertyId,
            price: _price,
            months: _months,
            status: PropertyStatus.Available,
            startRentTime: 0,
            currentRefugee: address(0),
            owner: msg.sender
        });

        //add property to properties mapping
        s_properties[s_propertyId] = property;

        // Increment the global property ID
        s_propertyId++;

        //event: PropertyListed
        emit PropertyListed(property);
        
    }

    function getProperty(uint _id) public view returns(Property memory) {
        return s_properties[_id];
    }

    function request(uint ID) public propertyIsAvailable(ID) onlyRefugee {
        //Add refugee's address to property
        Property storage property = s_properties[ID];
        property.currentRefugee = msg.sender;

        if(property.price == 0) {
            //change property status to occupied (no donation is needed)
            property.status = PropertyStatus.Occupied;

        } else {
            //change property status to requested
            property.status = PropertyStatus.Requested;

        }

        //event: PropertyStatusChanged
        emit PropertyStatusChanged(property.status);
        
    }



    function donate(uint ID) public payable propertyIsRequested(ID){

        Property storage property = s_properties[ID];

        // Using Chainlink Price Feed to get current USD/ETH price
        uint price = property.price.usdToEth();


        // Ensure the sent amount isn't less than the property's price
        require(msg.value >= price, "Incorrect donation amount");

        //send donation to contract
        (bool success,) = payable(address(this)).call{value: price}("");
        require(success, "Donation failed.");

        //pay the owner
        (bool paymentSuccessful, ) = payable(property.owner).call{value: price}("");
        require(paymentSuccessful, "Paying owner failed");

        //set property status to occupied
        property.status = PropertyStatus.Occupied;

        //start counting rent time
        property.startRentTime = block.timestamp; 

        //event: DonationReceived
        emit DonationReceived(msg.sender, msg.value);

        //event: PropertyOccupied
        emit PropertyStatusChanged(property.status);

        
    }

    function endRent(uint ID) public propertyIsRequested(ID) {
        Property storage property = s_properties[ID];

        //change property status to available
        property.status = PropertyStatus.Available;

        //set current refugee to 0
        property.currentRefugee = address(0);

        //set startRentTime to 0
        property.startRentTime = 0;

        //event: RentTimeEnded
        emit RentTimeEnded("Rent time is over.");

        //event: PropertyStatusChanged
        emit PropertyStatusChanged(property.status);
    }

    //----------------------------------------Chainlink-----------------------------------------//

        function checkUpkeep(bytes calldata /* checkData */) external view override returns (bool upkeepNeeded, bytes memory /*performData*/) {
        upkeepNeeded = block.timestamp - lastTimeStamp >= DAY;
        
    }

    

    function performUpkeep(bytes calldata /*performData*/ ) external override {
        if ((block.timestamp - lastTimeStamp) > DAY) {
            lastTimeStamp = block.timestamp;
        }
        for(uint i = 0; i < s_propertyId; i++) {
            Property memory property = s_properties[i];
            if(block.timestamp - property.startRentTime >= property.months * MONTHS && property.status == PropertyStatus.Occupied) {
                endRent(property.id);
            }
        }
    }


    fallback() external payable {
        
    }

    receive() external payable {
        
    }
    
}
