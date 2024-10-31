import Link from 'next/link'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const page = () => {
    return (
        <div className='px-10 py-3 text-slate-200 flex'>
            <div className="topic-name">
                <Link href='/pages/jargon-of-react'><FaChevronLeft /></Link>
                <div>Embedding Dynamic Content</div>
                <Link href='/'><FaChevronRight /></Link>
            </div>

            <div className='main-content'>

                {/* Jargaon of React */}
                <Link href='/' className='text-sm'>
                    1.
                </Link>

                {/* Embedding Dynamic Content */}
                <Link href='' className='text-sm'>
                    2.
                </Link>

            </div>

        </div>
    )
}

export default page