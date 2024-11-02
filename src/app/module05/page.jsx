'use client'

import Link from 'next/link';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PasswordValidation from '../components/PasswordValidation';
import ShowingCartItemsUsingConditionalRendering from '../components/ShowingCartItemsUsingConditionalRendering';
import CheckWeatherConditionalRendering from '../components/CheckWeatherConditionalRendering';

const ListInReact = () => {

    return (
        <div className='px-10 py-4 text-sm justify-center items-center'>

            {/* Topic header with navigation */}
            <div className="flex items-center justify-between text-3xl font-semibold mb-4 p-3 border border-yellow-100 border-dashed border-opacity-35 rounded-lg">
                <Link href='/module04'>
                    <FaChevronLeft className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-200" />
                </Link>
                <div className="text-center underline">Conditional Rendering In React</div>
                <Link href='/'>
                    <FaChevronRight className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-200" />
                </Link>
            </div>

            {/* Main Content */}
            <div className="p-6 border h-[80vh] border-yellow-100 border-dashed border-opacity-35 rounded-lg overflow-y-scroll scrollbar-hidden">

                <div className='mb-8'>
                    <div className='mb-1'><span className='font-bold text-yellow-500'>--| Conditional Rendering</span> in React allows components to render differently based on certain conditions. For Example:</div>
                        <li className='ml-10 mb-1'>Using if Statements</li>
                        <li className='ml-10 mb-1'>Using Ternary Operators</li>
                        <li className='ml-10 mb-1'>Using Logical && Operator</li>
                        <li className='ml-10 mb-1'>Using switch Statements</li>
                </div>

                {/* Examples */}
                <div className='text-xl font-bold underline mb-6'>Examples</div>
                <div className="flex mb-10 gap-2">1. <PasswordValidation /></div>
                <div className="flex mb-10 gap-2">2. <ShowingCartItemsUsingConditionalRendering /></div>
                <div className="flex mb-10 gap-2">2. <CheckWeatherConditionalRendering/></div>
            </div>

        </div>
    );
}

export default ListInReact;
