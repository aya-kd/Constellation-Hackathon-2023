// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test, console2} from "forge-std/Test.sol";
import {PriceConverter} from "../src/PriceConverter.sol";

contract PriceConverterTest is Test {

    using PriceConverter for uint;

    function setUp() public {
    }

    function testGetPrice() public view {
        //assertEq(PriceConverter.getPrice() / 1e18, 2083);
        console2.log("Price of 1 ETH in terms of USD: %s", PriceConverter.getPrice());

    }

    function testUsdToEth() public view {
        //assertEq(PriceConverter.getPrice().usdToEth(), 1);
        console2.log("Price of USD in terms of ETH: %s", PriceConverter.usdToEth(2083 * 1e18));

    }

}