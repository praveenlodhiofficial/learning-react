'use client'

import Link from 'next/link';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FriendListUsingMapFunction from '../components/FriendList';
import UserInfoListUsingMapFunction from '../components/UsersInfo';
import DestructoringFoodInfoListUsingMapFunction from '../components/DestructoringFoodInfo';
import DestructoringProductInfoListUsingMapFunction from '../components/DestructoringProductInfo';

const ListInReact = () => {

    const names = ['Praveen', 'Piyush', 'Shourya', 'Parshav'];

    return (
        <div className='px-10 py-4 text-sm justify-center items-center'>

            {/* Topic header with navigation */}
            <div className="flex items-center justify-between text-3xl font-semibold mb-4 p-3 border border-yellow-100 border-dashed border-opacity-35 rounded-lg">
                <Link href='/module02'>
                    <FaChevronLeft className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-200" />
                </Link>
                <div className="text-center underline">List In React (using Map)</div>
                <Link href='/module04'>
                    <FaChevronRight className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-200" />
                </Link>
            </div>

            {/* Main Content */}
            <div className="p-6 border h-[80vh] border-yellow-100 border-dashed border-opacity-35 rounded-lg overflow-y-scroll scrollbar-hidden">
                
                <div className='mb-8'> 
                    <li>The <span className='font-bold text-yellow-500'>map() function</span> in React is often used to render lists of items dynamically by iterating over an array and creating a new array of components.</li>
                </div>
                
                {/* Examples */}
                <div className='text-xl font-bold underline mb-6'>Examples</div>
                <div className="flex mb-10 gap-2">1. <FriendListUsingMapFunction /></div>
                <div className="flex mb-10 gap-2">2. <UserInfoListUsingMapFunction /></div>
                <div className="flex mb-10 gap-2">3. <DestructoringFoodInfoListUsingMapFunction /></div>
                <div className="flex mb-10 gap-2">4. <DestructoringProductInfoListUsingMapFunction /></div>
            
            </div>

        </div>
    );
}

export default ListInReact;
