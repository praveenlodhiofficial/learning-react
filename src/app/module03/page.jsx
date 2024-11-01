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
        <div className='px-10 py-4 text-xs justify-center items-center'>

            {/* Topic header with navigation */}
            <div className="flex items-center justify-between text-3xl font-semibold mb-4 p-3 border border-yellow-100 border-dashed border-opacity-35 rounded-lg">
                <Link href='/module02'>
                    <FaChevronLeft className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-200" />
                </Link>
                <div className="text-center underline">List In React</div>
                <Link href='/module04'>
                    <FaChevronRight className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-200" />
                </Link>
            </div>

            {/* Main Content */}
            <div className="p-6 border h-[80vh] border-yellow-100 border-dashed border-opacity-35 rounded-lg overflow-y-scroll">
                <div className="flex gap-2">1. <FriendListUsingMapFunction /></div>
                <div className="flex gap-2">2. <UserInfoListUsingMapFunction /></div>
                <div className="flex gap-3">3. <DestructoringFoodInfoListUsingMapFunction /></div>
                <div className="flex gap-3">4. <DestructoringProductInfoListUsingMapFunction /></div>
            </div>

        </div>
    );
}

export default ListInReact;
