// CopyButton.js
"use client"; // This component will run on the client side

import React, { useState } from 'react';
import { MdContentCopy } from "react-icons/md";

const CopyButton = ({ text }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text.trim()).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1000); // Hide message after 1 second
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="relative">
            {isCopied && (
                <span className={`absolute top-[-30px] rounded-br-none right-2 bg-white text-black font-extrabold transition-all duration-500 rounded-md px-2 py-1 text-[9px] ${isCopied ? 'opacity-100' : 'opacity-0'}`}>
                    Copied!
                </span>
            )}
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 font-mono"
                aria-label="Copy code"
            >
                <MdContentCopy className="size-4 active:size-5 transition-all duration-200 active:text-green-600" />
            </button>
        </div>
    );
}

export default CopyButton;