function ProjectName({ setProjectName }){
    return (
        <div>
            <p>Type the Project Name</p>
            <input type="text" placeholder="Project Name" onChange={(e) => setProjectName(e.target.value)}/>
        </div>
    )
}

export default ProjectName