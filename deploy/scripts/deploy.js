const hre  = require("hardhat");

async function main() {
    const CustomDEx = await hre.ethers.getContractFactory("CustomDex");
    const CustomDex = await CustomDEx.deploy();

    await CustomDex.deployed();
    console.log(`CustomDex: ${CustomDex.address}`);
}

main().catch((e) => {
    console.error(e);
    process.exitCode = 1;
});

// 0x5aCE63EED834DF73956fAF9Cf1cb4cd2919bCd0B