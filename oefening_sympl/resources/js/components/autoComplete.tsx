import React, { useEffect, useState } from 'react';
import axios from "axios";
import $  from "jquery";

interface Props {
    input: any;
    onSuggestionClicked: (newuserInput: string) => any;
}

const autoComplete: React.FC<Props> = (props) => {

    const [emails, setEmails] = useState<any[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [suggestions, setSuggestions] = useState<any>([]);
    const [lastSuggestionClicked, setLastSuggestionClicked] = useState<String>();

    if (props.input.length > 0 && !isLoaded) {
        fetch("http://127.0.0.1:8000/getAllEmails")
        .then(res => res.json())
        .then(
            (result) => {
                setEmails(result);
                setIsLoaded(true);
            },
        )
    }

    useEffect(() => {
        // Hide or show autocomplete based on input
        props.input.length === 0  || props.input === lastSuggestionClicked  ? $('#autocomplete').hide() : $('#autocomplete').show();

        // Get everything lowercase and filter when input prop changes
        setSuggestions(emails.filter(
            email => email.toLowerCase().indexOf(props.input.toLowerCase()) > -1
        ));
        
    }, [props.input])

    // On click on suggestion, pass the value to the parents
    const fillInSuggestion = (e: React.MouseEvent<HTMLLIElement>) => {
        // Get the list element & lift data up
        const element = e.currentTarget as HTMLLIElement;
        props.onSuggestionClicked(element.innerText);
        setLastSuggestionClicked(element.innerText)
    }

    return (
       <div id="autocomplete">
           <ul className="w-36 bg-white absolute">
               {suggestions.map((suggestion, index) => {
                   return(
                       <li className="w-36 text-sm cursor-pointer p-1" key={index} onClick={fillInSuggestion}>{suggestion}</li>
                   )
                })}
                {suggestions.length == 0 ? <li className="w-36 text-sm  p-1">No users found...</li> : null}
           </ul>
       </div>
    );
};

export default autoComplete;
