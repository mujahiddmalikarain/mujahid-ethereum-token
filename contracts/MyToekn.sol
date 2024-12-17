
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MujahidToken is ERC20{

    constructor(uint initialSupply) ERC20("MujahidToken" ,"MTK") {
    _mint(msg.sender, initialSupply * (10 ** decimals())); // Adds 18 decimals

    }
}

