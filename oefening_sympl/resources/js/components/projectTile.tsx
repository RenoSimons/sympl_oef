import React from 'react';

interface Props {
    key: String;
    project_title: String;
}


const projectTile: React.FC<Props> = (props) => {

    const renderProjectTag = () => {
        switch (props.project_title) {
            case 'Project1':
                return <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">{props.project_title}</span>;
            case 'Project2':
                return <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">{props.project_title}</span>;
            case 'Project3':
                return <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">{props.project_title}</span>;
            case 'Project4':
                return <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">{props.project_title}</span>;
        }
    }

    return (
        <>
            {renderProjectTag()}
        </>
    );
};

export default projectTile;


