import React from 'react';
import codestring from '../data/codestring.json'; // Ensure correct path
import CodePreview from '../components/CodePreview';

const ProfileProps = () => {
  const ProfileProps = codestring.profileProps.profilePropsString; // This must be defined before use

  return (
    <div className='flex justify-between w-[100%]'>
      <User
        name='Praveen Lodhi'
        age={21}
        isMarried={false}
        location='Andheri West, Mumbai'
        hobbies={['Coding, Reading, Gymnastics']}
      />
      <div>
        {/* CODE PREVIEW */}
        <CodePreview codeString={ProfileProps} />
      </div>
    </div>
  );
};

const User = ({ name, age, isMarried, location, hobbies }) => {
  return (
    <div>
      <div className='flex flex-col'>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Is Married: {isMarried.toString()}</div>
        <div>Address: {location}</div>
        <div>Hobbies: {hobbies.join(', ')}</div>
      </div>
    </div>
  );
};

export default ProfileProps;
