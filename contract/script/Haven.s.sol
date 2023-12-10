// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import {Script} from "forge-std/Script.sol";
import {Haven} from "../src/Haven.sol";

contract DeployHaven is Script {

    function run() external returns (Haven) {
        vm.startBroadcast();
        Haven haven = new Haven();
        vm.stopBroadcast();

        return haven;
    }
}










