import React, { useState } from 'react';

import InputField from "./inputField";
import DropDown from "./dropDown";
import LinkButton from "./linkButton";


export default function inputForm() {
    let [userInput, setUserInput] = useState("");
    let [dropdownInput, setDropdownInput] = useState("");
    //let [formSubmitted, setformSubmitted] = useState(false);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userInput + dropdownInput)
    }

    return (
        <form action="#" className="mt-6 flex" onSubmit={handleSubmit}>

            <label htmlFor="email" className="sr-only">Email address</label>

            <InputField onInputUpdated={setUserInput} />
            
            <DropDown onDropInputUpdated={setDropdownInput}/>

            <LinkButton />
        </form>
    );
};