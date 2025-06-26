import ListItem from "./ListItem";

function List(){
    return (
        <>
            <h1>My Project Task List</h1>
            <ul>
                <ListItem taskName="Create a new project" owner="Icaro" devPoints={1}/>
                <ListItem taskName="Create a new component" owner="Icaro" devPoints={2}/>
                <ListItem taskName="Create a new page" owner="Icaro" devPoints={3}/>
                <ListItem taskName="Create a new feature" owner="Icaro" devPoints={5}/>
                <ListItem taskName="Create a new API" owner="Icaro" devPoints={8}/>
                <ListItem taskName="Create a new database" owner="Icaro" devPoints={13}/>
                <ListItem />
                <ListItem />

            </ul>
        </>
    )
}

export default List