import Link from 'next/link'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReactJargon = () => {
    return (
        <div className='px-10 py-5'>
            <div className="topic-name">
                <Link href='/'><FaChevronLeft /></Link>
                <div>Jargon of React</div>
                <Link href='/pages/embedding-dynamic-content'><FaChevronRight /></Link>
            </div>

            <div className='py-10 flex flex-col gap-2'>

                {/* Jargaon of React */}
                <Link href='/' className='text-sm'>
                    1.
                </Link>

                {/* Embedding Dynamic Content */}
                <Link href='/' className='text-sm'>
                    2.
                </Link>

            </div>

        </div>
    )
}

export default ReactJargon