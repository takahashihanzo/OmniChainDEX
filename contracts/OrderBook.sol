// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Takahashi Hanzo. All rights reserved.
pragma solidity ^0.8.19;

contract OrderBook {
    struct Order {
        address trader;
        uint256 amount;
        uint256 price;
        bool isBuyOrder;
    }

    mapping(uint256 => Order) public activeOrders;
    uint256 public orderCount;

    event OrderPlaced(uint256 orderId, address trader, uint256 amount, uint256 price, bool isBuyOrder);
    event OrderMatched(uint256 orderId, address buyer, address seller, uint256 amount, uint256 price);

    function placeOrder(uint256 amount, uint256 price, bool isBuyOrder) external {
        orderCount++;
        activeOrders[orderCount] = Order(msg.sender, amount, price, isBuyOrder);
        emit OrderPlaced(orderCount, msg.sender, amount, price, isBuyOrder);
    }
}
