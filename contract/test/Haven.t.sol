// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test, console2} from "forge-std/Test.sol";
import {Haven} from "../src/Haven.sol";

contract HavenTest is Test {
    Haven public haven;
    Haven.Account public owner;
    Haven.Account  public refugee;
    address public donor;

    //-----------------------------------------Setup-----------------------------------------//


    function setUp() public {
        haven = new Haven();
        donor = 0x8EDED9755877E9f1b493a8CB41dABf6843d88DF7;
        owner = Haven.Account("John", "Doe", "somewhere", "john@gmail.com", "123456", 0x821f3B05462A8Ec57D0a9B40170c5b0f565f146A, false);
        refugee = Haven.Account("Jane", "Doe", "somewhere", "jane@gmail.com", "7891011", 0x074E051365850D7BAa61b978Ab0B8607A6787498, true);

    }
    
    //-----------------------------------------Tests-----------------------------------------//
    function testListProperty() public {
        
        uint id = haven.s_propertyId();
        string memory _country = "USA";
        string memory _city = "NYC";
        string memory _addressLine = "somewhere";
        string memory _propertyType = "apartement";
        uint _rooms = 3;
        uint _price = 20;
        uint _months = 3;

        vm.prank(owner.account);
        haven.listProperty(_country, _city, _addressLine, _propertyType, _rooms, _price, _months);

        assertEq(haven.s_propertyId(), id+1);

        assertEq(haven.getProperty(0).price, _price);
        assertEq(haven.getProperty(0).months, _months);
        assertEq(haven.getProperty(0).country, _country);
        assertEq(haven.getProperty(0).city, _city);
        assertEq(haven.getProperty(0).addressLine, _addressLine);
        assertEq(haven.getProperty(0).propertyType, _propertyType);
        assertEq(haven.getProperty(0).rooms, _rooms);
        assertEq(haven.getProperty(0).owner, owner.account);
        assertEq(haven.getProperty(0).startRentTime, 0);
        assertEq(haven.getProperty(0).currentRefugee, address(0));
        assert(haven.getProperty(0).status == Haven.PropertyStatus.Available);

    }

    function testCreateOwnerAccount() public {
        string memory firstName = "John";
        string memory lastName = "Doe";
        string memory addressLine = "somewhere";
        string memory email = "john@gmail.com";
        string memory phoneNumber = "123456";
        bool isRefugee = false;

        vm.prank(owner.account);
        haven.createAccount(firstName, lastName, addressLine, email, phoneNumber, isRefugee);

        assertEq(haven.getAccount(owner.account).firstName, firstName);
        assertEq(haven.getAccount(owner.account).lastName, lastName);
        assertEq(haven.getAccount(owner.account).addressLine, addressLine);
        assertEq(haven.getAccount(owner.account).email, email);
        assertEq(haven.getAccount(owner.account).phoneNumber, phoneNumber);
        assertEq(haven.getAccount(owner.account).account, owner.account);
        assertEq(haven.getAccount(owner.account).isRefugee, false);

    }

    function testCreateRefugeeAccount() public {
        string memory firstName = "Jane";
        string memory lastName = "Doe";
        string memory addressLine = "somewhere";
        string memory email = "jane@gmail.com";
        string memory phoneNumber = "7891011";
        bool isRefugee = true;

        vm.prank(owner.account);
        haven.createAccount(firstName, lastName, addressLine, email, phoneNumber, isRefugee);

        assertEq(haven.getAccount(owner.account).firstName, firstName);
        assertEq(haven.getAccount(owner.account).lastName, lastName);
        assertEq(haven.getAccount(owner.account).addressLine, addressLine);
        assertEq(haven.getAccount(owner.account).email, email);
        assertEq(haven.getAccount(owner.account).phoneNumber, phoneNumber);
        assertEq(haven.getAccount(owner.account).account, owner.account);
        assertEq(haven.getAccount(owner.account).isRefugee, true);
    }



    function testRequest() public {

        vm.prank(owner.account);
        haven.listProperty("USA", "NYC", "somewhere", "apartement", 3, 20, 3);

        vm.startPrank(refugee.account);
        haven.createAccount("Jane", "Doe", "somewhere", "jane@gmail.com", "7891011", true);
        haven.request(0);
        vm.stopPrank();

        assert(haven.getProperty(0).status == Haven.PropertyStatus.Requested);
        assertEq(haven.getProperty(0).currentRefugee, refugee.account);

        
    }


    function testDonate() public {

        vm.prank(owner.account);
        haven.listProperty("USA", "NYC", "somewhere", "apartement", 3, 20, 3);

        vm.startPrank(refugee.account);
        haven.createAccount("Jane", "Doe", "somewhere", "jane@gmail.com", "7891011", true);
        haven.request(0);
        vm.stopPrank();

        vm.deal(donor, 100 ether);
        vm.startPrank(donor);
        haven.donate(0);
        vm.stopPrank();

        assert(haven.getProperty(0).status == Haven.PropertyStatus.Occupied);
    }

    function testPriceConversion() public {
        
    }


}