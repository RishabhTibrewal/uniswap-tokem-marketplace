import { BigNumber } from "ethers";
import { contract, tokenContract }  from "./contract";
import { toEth, toWei } from "./utils";

export async function swapEthToToken(tokenName, amount) {
    try {
        let tx = { value :toWei(amount) };

        const contractObj = await contract();
        const data = await contractObj.swapEthToToken(tokenName, tx);

        const receipt = await data.wait();
        return receipt;
    } catch(e) {
        return parseErrorMsg(e);
    }
}

export async function hasValidAllowance(owner, tokenName, amount) {
    try {
        const contractObj = await contract();
        const address = await contractObj.getTokenAddress(tokenName);

        const tokenContractObj = await tokenContract(address);
        const data = await tokenContractObj.allowance(
            owner, 
            "0x9F484cf5FD2A6D7DcE4FfB51098B1857Cf81b3a3"
        )

        const result = BigNumber.from(data.toString()).gte(
            BigNumber.from(toWei(amount))
        );
        return result;
    } catch (e) {
        return parseErrorMsg(e);
    }
}


    export async function swapTokenToEth(tokenName, amount){
        try{
            const contractObj = await contract();
            let tx = { value :toWei(amount) };
            const data = await contractObj.swapTokenToEth(tokenName, tx);

            const receipt = await data.wait();
            return receipt;

        }
        catch(e) {
            return parseErrorMsg(e);
        }

    }

    export async function swapTokenToToken(tokenNameA, tokenNameB, amount) {
        try{
            const contractObj = await contract();
            let tx = { value :toWei(amount) };
            const data = await contractObj.swapTokenToToken(tokenNameA, tokenNameB, tx);

            const receipt = await data.wait();
            return receipt;

        }
        catch(e) {
            return parseErrorMsg(e);
        }

    }

export async function getTokenBalance(tokenName, address){
    const contractObj = await contract();
    const data = await contractObj.getTokenBalance(tokenName, address);
    return data;
}

export async function getTokenAddress(tokenName){
   try{ const contractObj = await contract();
    const data = await contractObj.getTokenAddress(tokenName);
    return data;
    } catch(e) {
        return parseErrorMsg(e);
    }
}

export async function increaseAllowance(tokenName, amount){
    try{
        const contractObj = await contract();
        const address = await contractObj.getTokenAddress(tokenName);

        const tokenContractObj = await tokenContract(address);
        const data = await tokenContractObj.approve( 
            "0x9F484cf5FD2A6D7DcE4FfB51098B1857Cf81b3a3",
            toWei(amount)
        );
        const receipt = await data.wait();
        return receipt;
       } catch(e) {
        return parseErrorMsg(e);
    }
}

export async function getAllHistory() {
    try{
        const contractObj = await contract();
        const getAllHistory = await contractObj.getAllHistory();

        const historyTransaction  = getAllHistory.map((history, i) => ({
            historyId: history.historyId.toNumber(),
            tokenA: history.tokenA,
            tokenB: history.tokenB,
            inputValue: toEth(history?.inputValue),
            outputValue: toEth(history?.outputValue),
            userAddress: history.userAddress,
    }));
    return historyTransaction;
    } catch(e) {
        return parseErrorMsg(e);
    }
}

// function toWei(amount, decimals = 18){
//     const toWei = ethers.utils.parseUnits(amount, decimals)
//     return toWei.toString()
// }

function parseErrorMsg(e){
    const json = JSON.parse(JSON.stringify(e));
    return json?.reason || json?.error?.message;
}