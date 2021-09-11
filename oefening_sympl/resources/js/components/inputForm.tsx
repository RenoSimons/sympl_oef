import React, { useState } from 'react';
import axios from "axios";

import InputField from "./inputField";
import DropDown from "./dropDown";
import LinkButton from "./linkButton";

interface Props {
    rerenderParentCallback: any;
}

const inputForm: React.FC<Props> = (props) => {

    let [userInput, setUserInput] = useState("");
    let [dropdownInput, setDropdownInput] = useState("");
    //let [formSubmitted, setformSubmitted] = useState(false);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Make call to the api
        axios.post('http://127.0.0.1:8000/linkProject', {userInput,  dropdownInput})
        .then(response => {
            props.rerenderParentCallback();
        });
    }

    return (
        <form action="#" className="mt-6 flex" onSubmit={handleSubmit}>

            <InputField onInputUpdated={setUserInput} />
            
            <DropDown onDropInputUpdated={setDropdownInput}/>

            <LinkButton />
        </form>
    );
};

export default inputForm;