import React from "react";
import { Fragment, useRef, useState } from "react";
import { Loading } from "@nextui-org/react";
import { Dialog, Transaction } from "@headlessui/react";
import { func } from "prop-types";

export default function TransactionStatus({})  {
  const [open, setOpen ] = useState(true);

  function handleclose(){
    setOpen(true);
  }
  return (
    <Transaction.Root show= {open} as={Fragment}>
      <Dialog
      as="div" 
      className="fixed z-[99999] insert-0 overflow-y-auto"
      onClose={handleclose}
      >
        <div className="flex items-center justify-center min-h-screen
        pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transaction.Child
            as = {Fragment}
            enter = "ease-out duration-300"
            enterFrom = "opacity-0"
            enterTo="opacity-100"
            leave ="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
          <Dialog.Overlay className=" fixed insert-0 bg-gray-500 bg-opacity-75
          transition-opacity"/>
          </Transaction.Child>
          {/* center mai karne ke lia */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden = "true"
          >
            &#8203;
          </span>
          <Transaction.Child
            as = {Fragment}
            enter = "ease-out duration-300"
            enterFrom = "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave ="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
          <div className="status inline-block align-bottom py-6 bg-white border
          rounded-lg text-center overflow-hidden shadow-xl transform transition-all
          md:w-[35%] sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 py-4 items-center justify-center sm:px-6 sm:flex
          sm:flex-row-reverse">
            <Loading>Completing the transaction</Loading>
          </div>
          <p className="px-4 py-4 text-black items-center text-sm justify-center
          sm:px-6 sm:flex sm:flex-row-reverse">
            (transaction would usualy take &lt; 12 secs...)
          </p>
          </div>
          </Transaction.Child>
        </div>
      </Dialog>
    </Transaction.Root>
  )
};

