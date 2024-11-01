import React from 'react';
import CopyButton from './CopyButton';

const CodePreview = ({ codeString }) => {
    return (
        <div className="hidden lg:block text-[9px] bg-slate-50 rounded-md bg-opacity-5 text-mono tracking-[0.7px] w-[45vw]">
            <CopyButton text={codeString} />
            <pre className="bg-transparent p-4 pr-8 rounded-md w-[45vw] max-h-[50vh] whitespace-pre-wrap overflow-y-auto scrollbar-hidden">
                <code>
                    {codeString.trim()}
                </code>
            </pre>
        </div>
    );
};

export default CodePreview;
