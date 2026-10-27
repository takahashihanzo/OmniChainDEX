// Copyright (c) 2026 Takahashi Hanzo. All rights reserved.
// Licensed under the MIT License.

class PriceDiscovery {
    constructor() {
        this.historicalData = [];
    }

    recordTrade(price, volume) {
        this.historicalData.push({ price, volume, timestamp: Date.now() });
    }

    calculateFairMarketValue() {
        if (this.historicalData.length === 0) return 0;
        let totalVolume = 0;
        let volumeWeightedPrice = 0;
        
        for (let trade of this.historicalData) {
            totalVolume += trade.volume;
            volumeWeightedPrice += (trade.price * trade.volume);
        }
        return volumeWeightedPrice / totalVolume;
    }
}

module.exports = PriceDiscovery;
