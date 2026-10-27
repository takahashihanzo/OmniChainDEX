OmniChainDEX - Advanced Zero-Knowledge Order Book DEX
=====================================================
Copyright (c) 2026 Takahashi Hanzo. All rights reserved.
Licensed under the MIT License.

WHAT IS THIS PROJECT?
---------------------
OmniChainDEX is a highly advanced Decentralized Exchange (DEX) architecture built from scratch. Unlike simple token swaps, this project mimics institutional-grade exchanges using a custom Order Book Matching Engine and Zero-Knowledge (ZK) cryptography.

Core modules include:
1. Order Matching Engine: Processes high-frequency buy/sell orders and clears the market spread automatically.
2. Price Discovery: Calculates the volume-weighted fair market value based on historical trade data.
3. ZK Verifier: A Solidity smart contract that uses Zero-Knowledge proofs for secure and private trades.
4. Liquidity API: A custom backend node server that broadcasts market liquidity.

HOW TO USE IT (VS CODE STRUCTURE)
---------------------------------
Open the 'OmniChainDEX' folder in Visual Studio Code. You will see a clean, developer-friendly architecture without any hyphens or special characters in the file names.

OmniChainDEX
  > api (Contains liquidityAPI.js)
  > config (Network settings)
  > contracts (Solidity files like ZkVerifier.sol and OrderBook.sol)
  > core (Logic engines like orderMatchingEngine.js and priceDiscovery.js)
  > mediaAssets (Contains dexLogo.svg)
  > scripts (Deployment scripts)
  > test (Testing suites)

COMMANDS TO RUN
---------------
Open your terminal inside the OmniChainDEX folder and run the following commands:

1. Install dependencies (if any):
   npm install

2. Start the Liquidity Node API Server:
   npm start

3. Run the Smart Contract and Engine Tests:
   npm test

For full technical documentation, please refer to the README.md file.
