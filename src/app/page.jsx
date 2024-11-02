import Link from 'next/link'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";

const page = () => {
  return (
    <div className='px-10 py-4 text-sm'>
      <div className="flex items-center py-3 mb-2 gap-4 justify-center text-center text-4xl uppercase underline font-semibold">
        <FaReact /> Learn React with me <FaUserAstronaut />
      </div>

      <div className='flex justify-around p-10'>

        <div className='flex flex-col gap-2'>
          <Link href='/module01'> 1. Jargon of React </Link>
          <Link href='/module02'> 2. Embedding Dynamic Content </Link>
          <Link href='/module03'> 3. List In React (using map function) </Link>
          <Link href='/module04'> 4. Props In React </Link>
          <Link href='/module05'> 5. Conditional Rendering In React</Link>
          <Link href='/module06'> 6. React Lifecycle Methods </Link>
          <Link href='/module07'> 7. Handling Events in React </Link>
          <Link href='/module08'> 8. React Router Basics </Link>
          <Link href='/module09'> 9. Context API in React </Link>
          <Link href='/module10'> 10. Building a Simple App with React </Link>
          <Link href='/module11'> 11. React Hooks Introduction </Link>
          <Link href='/module12'> 12. Custom Hooks </Link>
          <Link href='/module13'> 13. React Performance Optimization </Link>
          <Link href='/module14'> 14. Error Boundaries in React </Link>
          <Link href='/module15'> 15. React Context for State Management </Link>
        </div>

        <div className='flex flex-col gap-2'> 
          <Link href='/module16'> 16. React Testing Library </Link>
          <Link href='/module17'> 17. Server-Side Rendering with Next.js </Link>
          <Link href='/module18'> 18. Static Site Generation with Next.js </Link>
          <Link href='/module19'> 19. API Routes in Next.js </Link>
          <Link href='/module20'> 20. Deploying a React App </Link>
          <Link href='/module21'> 21. Advanced React Patterns </Link>
          <Link href='/module22'> 22. React and TypeScript </Link>
          <Link href='/module23'> 23. State Management with Redux </Link>
          <Link href='/module24'> 24. React Native Basics </Link>
          <Link href='/module25'> 25. Building Progressive Web Apps with React </Link>
          <Link href='/module26'> 26. React Performance Tuning </Link>
          <Link href='/module27'> 27. Server Components in React </Link>
          <Link href='/module28'> 28. React and GraphQL </Link>
          <Link href='/module29'> 29. Testing React Components </Link>
          <Link href='/module30'> 30. Deploying React Apps on Vercel </Link>
        </div>

      </div>

    </div>
  )
}

export default page