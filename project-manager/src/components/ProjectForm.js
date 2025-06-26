function ProjectForm(){

    function registerProject(event){
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Registering new project...");
    }

    return (
        <div>
            <h1>Register New Project Form</h1>
            <form onSubmit={registerProject}>
                <div>
                    <input type="text" placeholder="Type here the name of the new project"/>
                </div>
                <div>
                    <input type="submit" value="Register Project"/>
                </div>
            </form>
        </div>
    )
}

export default ProjectForm