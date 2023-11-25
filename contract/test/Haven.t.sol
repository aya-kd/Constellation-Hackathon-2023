// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test, console2} from "forge-std/Test.sol";
import {Haven} from "../src/Haven.sol";

contract HavenTest is Test {
    Haven public haven;

    //-----------------------------------------Setup-----------------------------------------//


    function setUp() public {
        haven = new Haven();

    }
    
    //-----------------------------------------Tests-----------------------------------------//
    function testListProperty(uint _price, uint _months) public {
        
        uint id = haven.s_propertyId();
        haven.listProperty(_price, _months);
        //check if propertyID is incremented
        assertEq(haven.s_propertyId(), id+1);

    }


    function testRequest() public {
        
    }

    function testDonate() public {
    }


}