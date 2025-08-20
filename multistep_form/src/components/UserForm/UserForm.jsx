const UserForm = ({ data, fieldHandler }) => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">
            Name:
          </label>
          <input type="name" id="name" name="name" placeholder="Type your name" required value={data.name || ''} onChange={(e) => fieldHandler('name', e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="email">
            Email:
          </label>
          <input type="email" id="email" name="email" placeholder="Type your email" required value={data.email || ''} onChange={(e) => fieldHandler('email', e.target.value)}/>
        </div>
    </div>
  )
}

export default UserForm;
