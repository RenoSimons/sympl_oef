import React, { useEffect, useState } from 'react';
import User from "./user";

interface Props {
    rerenderComponent: boolean;
}

const userList: React.FC<Props> = (props) => {
    const [users, setUsers] = useState<any[]>([])
    const [error, setError] = useState([]);

    // Call the api for the different users with their projects
    useEffect(() => {
        fetch("http://127.0.0.1:8000/getUsers")
        .then(res => res.json())
        .then(
            (result) => {
            setUsers(result);
            },
            (error) => {
            setError(error);
            }
        )
    }, [props.rerenderComponent])

    return (
        <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Team members + projects</h3>

            {/* Lift the user data state down for each user*/}
            <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                {users.map((user, index) => (
                    <User key={user.id} user={user}/>
                ))}
            </ul>

            <p>{props.rerenderComponent}</p>
        </div>
    );
};

export default userList;
