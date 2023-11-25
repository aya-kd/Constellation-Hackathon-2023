// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {AggregatorV3Interface} from "../node_modules/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract AutomatedChainlinkTask {
    address public owner;
    uint public deploymentTime;
    uint public constant waitingPeriod = 1 minutes; // Adjust the waiting period as needed

    AggregatorV3Interface public timeOracle;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier afterWaitingPeriod() {
        require(block.timestamp >= deploymentTime + waitingPeriod, "Waiting period has not passed");
        _;
    }

    constructor(address _timeOracle) {
        owner = msg.sender;
        deploymentTime = block.timestamp;
        timeOracle = AggregatorV3Interface(_timeOracle);
    }

    function getTime() public view returns (uint) {
        (, int timestamp, , , ) = timeOracle.latestRoundData();
        require(timestamp > 0, "Invalid timestamp from time oracle");
        return uint(timestamp);
    }

    function doTask() public onlyOwner afterWaitingPeriod {
        // Perform the automated task here using the current timestamp
        // For example, transfer funds, update data, etc.
    }
}