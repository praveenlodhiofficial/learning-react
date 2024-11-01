import React from 'react'

const UsersInfoListUsingMapFunction = () => {

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
        <div>
            <div className='flex gap-2'>
                Users Information:
                <div className='flex flex-col'>
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
            <br /><br />

        </div>
    )
}

export default UsersInfoListUsingMapFunction