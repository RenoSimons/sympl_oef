import * as React from 'react';

export default function dropDown() {
    return (
        <select id="location" name="location" className="ml-1 shadow-sm block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Project 1</option>
            <option>Another project</option>
            <option>Third project</option>
        </select>
    );
};
