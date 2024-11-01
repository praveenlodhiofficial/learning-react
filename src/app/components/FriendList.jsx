import React from 'react';

const FriendListUsingMapFunction = () => {

    const names = ['Praveen', 'Piyush', 'Shourya', 'Parshav'];

    return (
        <div>
            < div className='flex gap-2'>
                Friend List:
                <div>
                    {
                        names.map((name, index) => (
                            <ul
                                key={index}>{name}</ul>
                        ))
                    }
                </div>
            </div >
            <br /><br />

        </div>
    );
}

export default FriendListUsingMapFunction;
