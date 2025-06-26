function Person({ photo, name, age, profession }) {

    return (
        <div>
            <img src={photo} alt={name} />
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
        </div>
    )
}

export default Person