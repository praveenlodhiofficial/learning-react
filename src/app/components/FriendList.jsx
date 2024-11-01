import React from 'react';
import codestring from '../data/codestring.json'
import CodePreview from '../components/CodePreview'

const FriendListUsingMapFunction = () => {

    const friendListString = codestring.friendList.friendListString;

    const names = ['Praveen', 'Piyush', 'Shourya', 'Parshav'];

    return (
        <div className='flex w-[100%] justify-between'>

            {/* MAIN CONTENT */}
            < div className='flex gap-2 w-[40vw]'>
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

            {/* CODE PREVIEW */}
            <CodePreview codeString={friendListString} />

        </div>
    );
}

export default FriendListUsingMapFunction;
