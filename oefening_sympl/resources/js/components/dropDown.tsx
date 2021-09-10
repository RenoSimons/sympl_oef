import React, {useEffect, useState} from 'react';

export default function dropDown() {
  const [projects, setProjects] = useState<any[]>([])
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/getProjects")
      .then(res => res.json())
      .then(
        (result) => {
          setProjects(result);
          console.log(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])
      
    return (
        <select id="location" name="location" className="ml-1 shadow-sm block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          {projects.map((project) => (
            <option key={project.id}>{project.project_name}</option>
          ))}
        </select>
    );
};
