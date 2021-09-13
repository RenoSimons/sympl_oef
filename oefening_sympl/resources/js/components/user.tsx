import * as React from 'react';
import ProjectTile from './projectTile';

type Props = {
    user: {
        name: String,
        projects: Object,
    }
}

const user: React.FC<Props> = (props) => {
    return (
        <li className="py-4 flex items-center justify-between space-x-3">
            <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{props.user.name}</p>
                    <p className="text-sm font-medium text-gray-500 truncate">Front-end Developer</p>
                </div>
                <div className="flex-shrink-0">
                    {Object.entries(props.user.projects).map(([key, value]) => {
                        return <ProjectTile key={key} project_title={value.project_name}/>
                    })}
                </div>
            </div>
        </li>
    );
};

export default user;