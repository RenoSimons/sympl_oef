import React, { useState } from 'react';

interface Props {
    onInputUpdated: (newuserInput: string) => any;
}

const inputField: React.FC<Props> = (props) => {

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Lift the state up on change
        props.onInputUpdated(e.target.value);
    };

    return(
        <input onChange={inputChange} type="text" name="email" id="email" className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter an email" />
    );
};

export default inputField;