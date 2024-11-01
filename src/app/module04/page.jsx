import Link from 'next/link';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FriendListUsingMapFunction from '../components/FriendList';
import UserInfoListUsingMapFunction from '../components/UsersInfo';
import DestructoringFoodInfoListUsingMapFunction from '../components/DestructoringFoodInfo';

const ListInReact = () => {

    return (
        <div className='px-10 py-4 text-xs justify-center items-center'>

            {/* Topic header with navigation */}
            <div className="flex items-center justify-between text-3xl font-semibold mb-4 p-3 border border-yellow-100 border-dashed border-opacity-35 rounded-lg">
                <Link href='/module03'>
                    <FaChevronLeft className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-200" />
                </Link>
                <div className="text-center underline">Props In React</div>
                <Link href='/'>
                    <FaChevronRight className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-200" />
                </Link>
            </div>

            {/* Main Content */}
            <div className="p-6 border h-[80vh] border-yellow-100 border-dashed border-opacity-35 rounded-lg overflow-y-scroll scrollbar-hidden">

                <div className='mb-8'>
                    <li className='mb-1'>In React,<span className='font-bold text-yellow-500'> 'Props' </span>(short for "properties") are a <span className='font-bold text-yellow-500'>way to pass data from a parent component to a child component.</span></li>
                    <li className='mb-1'>They are a core concept in React that allows components to be <span className='font-bold text-yellow-500'>reusable and dynamic.</span></li>
                    <li className='mb-1'>They are read-only, meaning the child component receiving the prop cannot modify it directly. <span className='font-bold text-yellow-500'>Props are immutable</span> in this context.</li>
                </div>
                
                {/* Examples */}
                <div className='text-xl font-bold underline mb-6'>Examples</div>
                <div className="flex gap-2">1. <FriendListUsingMapFunction /></div>
                <div className="flex gap-2">2. <UserInfoListUsingMapFunction /></div>
                <div className="flex gap-2">3. <DestructoringFoodInfoListUsingMapFunction /></div>
            </div>

        </div>
    );
}

export default ListInReact;
