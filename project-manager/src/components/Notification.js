function Notification({ projectName }) {
    function generateNotification() {
        if (!projectName) {
            return "Please enter a project name.";
        }
        return `Project "${projectName}" has been created successfully!`;
    }

    return (
        <>
            {projectName && <p>{generateNotification(projectName)}</p>}
        </>
    );
}

export default Notification