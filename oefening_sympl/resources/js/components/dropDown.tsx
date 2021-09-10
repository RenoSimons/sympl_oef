import React, { useEffect, useState } from 'react';

interface Props {
  onDropInputUpdated: (newdropInput: string) => any;
}

const dropDown: React.FC<Props> = (props) => {

  const [projects, setProjects] = useState<any[]>([])
  const [error, setError] = useState([]);

  // Call the api for the different projects
  useEffect(() => {
    fetch("http://127.0.0.1:8000/getProjects")
      .then(res => res.json())
      .then(
        (result) => {
          setProjects(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // Lift the state up on change
    props.onDropInputUpdated(value);
  };

  // Render the dropdown
  return (
    <select onChange={selectChange} id="location" name="location" className="ml-1 shadow-sm block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
      <option selected disabled>
          Choose project...
      </option>
      {projects.map((project) => (
        <option value={project.id} key={project.id}>{project.project_name}</option>
      ))}
    </select>
  );
};

export default dropDown;