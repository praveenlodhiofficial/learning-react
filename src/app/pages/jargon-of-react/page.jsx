import Link from 'next/link'
import React from 'react'
import './style.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import questions from '@/database/jargonQuestions';

const ReactJargon = () => {
    return (
        <div className='px-10 py-3 text-slate-200 justify-center flex'>
            <div className="topic-name">
                <Link href='/'><FaChevronLeft /></Link>
                <div>Jargon of React</div>
                <Link href='/pages/embedding-dynamic-content'><FaChevronRight /></Link>
            </div>

            <div className='main-content'>

                {/* Interview Related Stuff */}
                <div className="space-y-4 ">
                    {questions.jargonQuestions.map((item) => (
                        <div key={item.id} className="rounded-lg shadow-md">
                            <h2 className="text-sm text-yellow-200 font-bold">{item.question}</h2>
                            <p className="mt-2 ml-6 text-[11px]">{item.answer}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default ReactJargon