function ClickEvent( { project_name }){

    function myClickHandler() {
        console.log(`Start project ${project_name}`);
    }

    return (
        <div>
            <p>Click here to trigger an event: </p>
            <button onClick={myClickHandler}>Click to get started</button>
        </div>
    )
}

export default ClickEvent