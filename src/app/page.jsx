import Link from 'next/link'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";

const page = () => {
  return (
    <div className='px-10 py-5'>
      <div className="flex items-center gap-4 justify-center text-center text-4xl uppercase underline font-semibold">
      <FaReact /> Learn React with me <FaUserAstronaut />
      </div>

      <div className='py-10 flex flex-col gap-2'>

        {/* Jargaon of React */}
        <Link href='/pages/jargon-of-react' className='text-sm'>
          1. Jargon of React
        </Link>

        {/* Embedding Dynamic Content */}
        <Link href='/pages/embedding-dynamic-content' className='text-sm'>
          2. Embedding Dynamic Content
        </Link>

      </div>

    </div>
  )
}

export default page