// Copyright (c) 2026 Takahashi Hanzo. All rights reserved.
// Licensed under the MIT License.

class OrderMatchingEngine {
    constructor() {
        this.buyOrders = []; // Bids
        this.sellOrders = []; // Asks
    }

    addOrder(order) {
        if (order.isBuy) {
            this.buyOrders.push(order);
            this.buyOrders.sort((a, b) => b.price - a.price); // Highest bid first
        } else {
            this.sellOrders.push(order);
            this.sellOrders.sort((a, b) => a.price - b.price); // Lowest ask first
        }
        this.matchOrders();
    }

    matchOrders() {
        while (this.buyOrders.length > 0 && this.sellOrders.length > 0) {
            let highestBid = this.buyOrders[0];
            let lowestAsk = this.sellOrders[0];

            if (highestBid.price >= lowestAsk.price) {
                console.log(`Trade Executed: Spread cleared at ${lowestAsk.price}`);
                // Execution logic
                this.buyOrders.shift();
                this.sellOrders.shift();
            } else {
                break; // Spread maintained, no match
            }
        }
    }
}

module.exports = OrderMatchingEngine;
