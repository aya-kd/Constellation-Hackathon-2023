//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {AggregatorV3Interface} from "../node_modules/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {

    function getPrice() internal view returns(uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        (,int256 price,,,) = priceFeed.latestRoundData();
        //Price of ETH in terms of USD
        // 2077_00000000 = 2077 * 1e8 = 2077$ * 1e18
        return uint256(price * 1e10); //to make it 2077 * amount of wei
    }

    function usdToEth(uint _amount) internal view returns (uint) {
        return _amount / getPrice();
    }
}