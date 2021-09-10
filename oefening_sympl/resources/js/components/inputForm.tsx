import * as React from 'react';
import InputField from "./inputField";
import DropDown from "./dropDown";
import LinkButton from "./linkButton";

export default function inputForm() {
    return (
        <form action="#" className="mt-6 flex">
            <label htmlFor="email" className="sr-only">Email address</label>
            <InputField />
            

            <DropDown />

            <LinkButton />
        </form>
    );
};