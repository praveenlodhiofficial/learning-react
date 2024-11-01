import React from 'react'
import codestring from '../data/codestring.json'
import CodePreview from '../components/CodePreview'

const UsersInfoListUsingMapFunction = () => {

    const usersInfoString = codestring.usersInfo.usersInfoString;

    const usersInfo = [
        {
            username: 'Praveen Lodhi',
            email: 'praveen@123',
            location: 'Mumbai',
        },
        {
            username: 'Piyush Kumar',
            email: 'piyush@456',
            location: 'Bihar',
        },
        {
            username: 'Shourya Tamboskar',
            email: 'shourya@789',
            location: 'Naala Supara',
        },
    ]

    return (
        <div className='flex justify-between w-[100%]'>
            <div className='flex gap-2'>
                Users Information:
                <div className='flex flex-col gap-10'>
                    {
                        usersInfo.map((userInfo, index) => (
                            <ul key={index}>
                                <div>{userInfo.username}</div>
                                <div>{userInfo.email}</div>
                                <div>{userInfo.location}</div>
                                <br />
                            </ul>
                        ))
                    }
                </div>

            </div>

            {/* CODE PREVIEW */}
            <CodePreview codeString={usersInfoString} />
        </div>
    )
}

export default UsersInfoListUsingMapFunction