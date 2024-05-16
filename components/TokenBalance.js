import { useEffect, useRef, useState } from "react";
import React from "react";
import toast, { Toaster, toaster } from "react-hot-toast";
import { ethers } from "ethers";
import  {
  ClipboardIcon,
  ClipBoardcheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { TransactionStatus } from "./index";
import { 
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";

const TokenBalance = ({ name, walletAddress}) => {
  const[balance, setBalance] = useState("-");
  const[tokenAddress, setTokenAddress] = useState();

  const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon});
  const [txPending,setTxPending] = useState(false);
  const notifyError = (msg) => toast.error(msg, { duration: 6000});

  const notifySuccess = () => toast.success("Transaction completed");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance("-");
  }, [name, walletAddress]);

async function fetchTokenBalance() {
  const bal = await getTokenBalance(name, walletAddress);
  console.log(bal);
  const fbal = ethers.utils.formatUnits(bal.toString(), 18);
  setBalance(fbal.toString());
}

async function fetchTokenAddress() {
  const address  = await getTokenAddress(name);
  setTokenAddress(address);
}


  return (
  <div className="flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]">
    <div className="flex items-center bg-zinc-900 text-zinc-300, w-fit p-2 px-3
    rounded-l-lg">
    <p className="text-sm">{name}</p>
    <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100 ">
      {balance} 
    </p>
    </div>
    <div className=" flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg">
      <copyIcon.icon className="h-6 corsor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(tokenAddress);
        setCopyIcon({ icon:ClipBoardcheckIcon });
      }}
      />
    </div>
    {txPending && <TransactionStatus/>}
    <Toaster/>
  </div>
  );
};

export default TokenBalance;
