import * as React from 'react';

export default function inputField() {
    return(
        <input type="text" name="email" id="email" className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter an email" />
    );
};