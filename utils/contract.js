import { ethers } from "ethers";
import CustomDexABI from "../utils/CustomDex.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;

    if(ethereum) {
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            address,
            CustomTokenABI.abi,
            signer
        );

        return contractReader;
    }
}

export const Contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;

    if(ethereum) {
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            // "0x9F484cf5FD2A6D7DcE4FfB51098B1857Cf81b3a3",
            // "0x5aCE63EED834DF73956fAF9Cf1cb4cd2919bCd0B",
            "0xB22B830565314534E1a5F51884c360235aC35f3F",
            CustomDexABI.abi,
            signer
        );

        return contractReader;
    }
}
