import React from 'react';
import codestring from '../data/codestring.json';
import CodePreview from '../components/CodePreview';

const PasswordValidation = () => {

    const passwordValidationString = codestring.passwordValidation.passwordValidationString;

    const ValidPassword = () => <div>Password is Correct</div>;
    const InvalidPassword = () => <div>Password is Incorrect</div>;

    const Password = ({ isPasswordValid }) => {
        if (isPasswordValid) {
            return <ValidPassword />;
        }
        return <InvalidPassword />;
    };

    return (
        <div className='flex justify-between w-full'>
            <div className='flex gap-2'>
                Is Password Valid: <Password isPasswordValid={true} />
            </div>

            {/* CODE PREVIEW */}
            <CodePreview codeString={passwordValidationString} />
        </div>
    );
};

export default PasswordValidation;
