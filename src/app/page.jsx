import Link from 'next/link'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";

const page = () => {
  return (
    <div className='px-10 py-4'>
      <div className="flex items-center py-3 mb-2 gap-4 justify-center text-center text-3xl uppercase underline font-semibold">
        <FaReact /> Learn React with me <FaUserAstronaut />
      </div>

      <div className='p-6 flex flex-col gap-2'>

        {/* Jargaon of React */}
        <Link href='/module01' className='text-sm'>
          1. Jargon of React
        </Link>

        {/* Embedding Dynamic Content */}
        <Link href='module02' className='text-sm'>
          2. Embedding Dynamic Content
        </Link>

        {/* Module 03 - List In React */}
        <Link href='/module03' className='text-sm'>
          3. List In React (using map function)
        </Link>

        {/* Module 04 - Props In React */}
        <Link href='/module04' className='text-sm'>
          4. Props In React
        </Link>

      </div>

    </div>
  )
}

export default page