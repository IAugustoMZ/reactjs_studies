function ArrayList( { items }) {
    return (
        <>
            <h3>Users and their Data</h3>
            <ul>
                {
                    items.length === 0 ? (<p>No users found.</p>):
                    items.map((item) => (
                    <li key={item.id}>
                        <img src={item.photo} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        <strong>{item.name}</strong> - Age: {item.age}, Profession: {item.profession}
                    </li>
                ))}
            </ul>
            <p>Total Users: {items.length}</p>
        </>
    )
}

export default ArrayList
