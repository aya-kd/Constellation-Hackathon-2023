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
        owner = Haven.Account("John", "Doe", 0x821f3B05462A8Ec57D0a9B40170c5b0f565f146A, false);
        refugee = Haven.Account("Jane", "Doe", 0x074E051365850D7BAa61b978Ab0B8607A6787498, true);

    }
    
    //-----------------------------------------Tests-----------------------------------------//
    function testListProperty(uint _price, uint _months) public {
        
        uint id = haven.s_propertyId();
        haven.listProperty(_price, _months);
        //check if propertyID is incremented
        assertEq(haven.s_propertyId(), id+1);

    }

    function testCreateAccount() public {
        string memory firstName = "John";
        string memory lastName = "Doe";
        bool isRefugee = false;

        vm.prank(owner.account);
        haven.createAccount(firstName, lastName, isRefugee);

        assertEq(haven.getAccount(owner.account).firstName, firstName);
        assertEq(haven.getAccount(owner.account).lastName, lastName);
        assertEq(haven.getAccount(owner.account).account, owner.account);
        assertEq(haven.getAccount(owner.account).isRefugee, false);

        firstName = "Jane";
        lastName = "Doe";
        isRefugee = true;

        vm.prank(refugee.account);
        haven.createAccount(firstName, lastName, isRefugee);

        assertEq(haven.getAccount(refugee.account).firstName, firstName);
        assertEq(haven.getAccount(refugee.account).lastName, lastName);
        assertEq(haven.getAccount(refugee.account).account, refugee.account);
        assertEq(haven.getAccount(refugee.account).isRefugee, true);

    }


    function testListProperty() public {
        uint price = 1000;
        uint months = 3;

        vm.prank(owner.account);
        haven.listProperty(price, months);

        assertEq(haven.getProperty(0).price, price);
        assertEq(haven.getProperty(0).months, months);
        assertEq(haven.getProperty(0).owner, owner.account);
        assertEq(haven.getProperty(0).startRentTime, 0);
        assertEq(haven.getProperty(0).currentRefugee, address(0));
        assert(haven.getProperty(0).status == Haven.PropertyStatus.Available);
    }


    function testRequest() public {

        vm.prank(owner.account);
        haven.listProperty(10, 1);

        vm.startPrank(refugee.account);
        haven.createAccount("Jane", "Doe", true);
        haven.request(0);
        vm.stopPrank();

        assert(haven.getProperty(0).status == Haven.PropertyStatus.Requested);
        assertEq(haven.getProperty(0).currentRefugee, refugee.account);

        
    }


    function testDonate() public {

        vm.prank(owner.account);
        haven.listProperty(10, 1);

        vm.startPrank(refugee.account);
        haven.createAccount("Jane", "Doe", true);
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