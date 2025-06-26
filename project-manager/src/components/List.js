import ListItem from "./ListItem";

function List(){
    return (
        <>
            <h1>My Project Task List</h1>
            <ul>
                <ListItem task_name="Create a new project" />
                <ListItem task_name="Create a new component" />
                <ListItem task_name="Create a new page" />
                <ListItem task_name="Create a new route" />
                <ListItem task_name="Create a new service" />
                <ListItem task_name="Create a new API" />
                <ListItem task_name="Create a new database" />
                <ListItem task_name="Create a new model" />
                <ListItem task_name="Create a new controller" />
                <ListItem task_name="Create a new view" />
                <ListItem task_name="Create a new middleware" />
                <ListItem task_name="Create a new helper" />
                <ListItem task_name="Create a new utility" />
                <ListItem task_name="Create a new library" />
            </ul>
        </>
    )
}

export default List