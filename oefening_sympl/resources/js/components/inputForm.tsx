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
    let [error, setError] = useState({email: String, dropdown: String});
    let [message, setMessage] = useState<String>();

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        let email = userInput;
        let dropdown = dropdownInput;

        // Make call to the api
        axios.post('http://127.0.0.1:8000/linkProject', {email,  dropdown})
        .then(response => {
            if (response.data.validation_error) {
                setError(response.data.validation_error)
            } else {
                setMessage(response.data)
                props.rerenderParentCallback();
            }
        },
        (error) => {
            setError(error);
        });
    }

    return (
        <>
            <form action="#" className="mt-6 flex" onSubmit={handleSubmit}>
                <InputField onInputUpdated={setUserInput} />
                
                <DropDown onDropInputUpdated={setDropdownInput}/>

                <LinkButton />
            </form>
            {/* Render error messages */}
            <div>
                <ul>
                    <li><span className="text-red-400">{error.email}</span></li>
                    <li><span className="text-red-400">{error.dropdown}</span></li>
                    <li><span className="text-green-400">{message}</span></li>
                </ul>
            </div>
        </>
    );
};

export default inputForm;