import Button from "./Button";

function ClickEvent( { project_name }){

    function myClickHandler() {
        console.log(`Start project ${project_name}`);
    }

    function myClickHandler2() {
        console.log("Click event triggered");
    }

    return (
        <div>
            <p>Click here to trigger an event: </p>
            <Button event={myClickHandler} text="First Project" />
            <button onClick={myClickHandler}>Click to get started</button>
            <button onClick={myClickHandler2}>Click to trigger</button>
        </div>
    )
}

export default ClickEvent