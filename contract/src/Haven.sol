// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {PriceConverter} from "./PriceConverter.sol";
contract Haven {

    using PriceConverter for uint;

    uint public s_propertyId;

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
        address currentRefugee;
        address owner;  
    }

    //---------------------------------------Constructor---------------------------------------//
    constructor() {
        
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

    modifier onlyOwner() {
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


    function listProperty(uint _price, uint _months) public onlyOwner{
        Property memory property = Property({
            id: s_propertyId,
            price: _price,
            months: _months,
            status: PropertyStatus.Available,
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

        //event: DonationReceived
        emit DonationReceived(msg.sender, msg.value);

        //event: PropertyOccupied
        emit PropertyStatusChanged(property.status);

        
    }


    function endRentTime(uint ID) public{
        // Chanlink Automation

        Property storage property = s_properties[ID];

        //turn refugee's address to 0
        property.currentRefugee = address(0);

        //change property's sratus to available
        property.status = PropertyStatus.Available;

        //event: RentTimeEnded
        emit RentTimeEnded("Rent time ended.");
    }

    
}

//only refugees can request rent --- *done*
//only owners can accept or reject requests  --- *done*
//price = 0 --- *done*
//events --- *done*



//chainlink --- **not done**
//tests --- **not done**
//what if owner doesn't want to rent his property anymore? --- **not done**



//accept/reject --- *cancelled*