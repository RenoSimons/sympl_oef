import React, { useState } from 'react';
import axios from "axios";
import $ from 'jquery'; 

import InputField from "./inputField";
import DropDown from "./dropDown";
import LinkButton from "./linkButton";

interface Props {
    rerenderParentCallback: any;
}

const inputForm: React.FC<Props> = (props) => {

    let [userInput, setUserInput] = useState("");
    let [dropdownInput, setDropdownInput] = useState("");
    let [hasError, setHasError] = useState<Boolean>(false);
    let [error, setError] = useState({email: String, dropdown: String});
    let [feedbackMessage, setFeedbackMessage] = useState<String>();

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Close autocomplete field
        $('#autocomplete').hide();

        let email = userInput;
        let dropdown = dropdownInput;

        // Make call to the api
        axios.post('http://127.0.0.1:8000/linkProject', {email,  dropdown})
        .then(response => {
            if (response.data.validation_error) {
                // Handle validation errors
                setHasError(true);
                setError(response.data.validation_error)
                setFeedbackMessage('');
            } else {
                // Update feedback message
                setHasError(false);
                setFeedbackMessage(response.data)
                // Rerender the user list component
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
            { hasError ? 
            <div>
                <ul className="flex">
                    {Object.entries(error).map(([key, message]) => {
                        return <li key={key}><span className="text-red-400 text-xs ml-2">{message}</span></li>
                    })}
                </ul>
            </div> : null}
            

            {/* Render feedback message */}
            <div>
                <ul>
                    <li><span className="text-green-400 text-xs ml-2">{feedbackMessage}</span></li>
                </ul>
            </div>
        </>
    );
};

export default inputForm;