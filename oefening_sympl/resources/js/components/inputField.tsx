import React, { useState } from 'react';
import AutoComplete from './autoComplete';

interface Props {
    onInputUpdated: (newuserInput: string) => any;
}

const inputField: React.FC<Props> = (props) => {
    let [input, setInput] = useState('');

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Lift the state up on change
        props.onInputUpdated(e.target.value);
        setInput(e.target.value);
    };

    const suggestionClicked = (value) => {
        props.onInputUpdated(value);
        setInput(value);
    }

    return(
        <div>
            <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input onChange={inputChange} value={input} autoComplete="off" type="text" name="email" id="email" className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter an email" />
            </div>
            <div>
                <AutoComplete input={input} onSuggestionClicked={suggestionClicked}/>
            </div>
        </div>
    );
};

export default inputField;