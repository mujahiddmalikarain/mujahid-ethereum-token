require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/d97740d64db242779947757f5b8d05ba", // Ganache RPC URL
      accounts: [
        "89a62e7a7f48188d83d519f8d055162860b0199a5f49a4dac8b625514c841307", // Replace with the private key from Ganache
      ],
    },
  },
};
