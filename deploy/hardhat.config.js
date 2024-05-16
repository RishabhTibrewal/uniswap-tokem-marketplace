require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://sepolia.infura.io/v3/";
const NEXT_PUBLIC_PRIVATE_KEY = "b6abeb21fde96e3855b75eab5b464777c06a8206699f5b40af58ade526e53dbf";
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    Amoy: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
      gasPrice: 8000000000,
    },
  },
};
