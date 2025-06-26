import { useState } from 'react';

function ProjectForm(){

    function registerProject(event){
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Project Name:", projectName);
        console.log("Password:", password);
        console.log("Registering new project...");
    }

    const [projectName, setProjectName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Register New Project Form</h1>
            <form onSubmit={registerProject}>
                <div>
                    <label htmlFor="projectName">Project Name: </label>
                    <input type="text" id="projectName" name="projectName" placeholder="Type here the name of the new project" onChange={(e) => setProjectName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Admin Password: </label>
                    <input type="password" id="password" name="password" placeholder="Type here the admin password to create a new project" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Register Project"/>
                </div>
            </form>
        </div>
    )
}

export default ProjectForm