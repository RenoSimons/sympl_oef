import React, { useEffect, useState } from 'react';
import axios from "axios";

interface Props {
    input: any;
    onSuggestionClicked: (newuserInput: string) => any;
}

const autoComplete: React.FC<Props> = (props) => {

    const [emails, setEmails] = useState<any[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [suggestions, setSuggestions] = useState<any>([]);

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
        // Get everything lowercase and filter when input prop changes
        setSuggestions(emails.filter(
            email => email.toLowerCase().indexOf(props.input.toLowerCase()) > -1
        ));
        
    }, [props.input])

    // On click on suggestion pass the value to the parents
    const fillInSuggestion = (e: React.MouseEvent<HTMLLIElement>) => {
        const element = e.currentTarget as HTMLLIElement;
        props.onSuggestionClicked(element.innerText);
    }

    return (
       <div>
           <ul style={{backgroundColor: "white", position: 'absolute'}}>
               {suggestions.map((suggestion, index) => {
                   return(
                       <li key={index} onClick={fillInSuggestion}>{suggestion}</li>
                   )
                })}
           </ul>
       </div>
    );
};

export default autoComplete;
