import './Login.css'
import { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Email: ${email}\nPassword: ${password}`)
    }

return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Access the Simulation:</h1>
            <div className='input-field'>
                <input type="email" placeholder="Enter your username" onChange={(e) => setEmail(e.target.value)} />
                <FaUser className='icon'/>
            </div>
            <div className='input-field'>
                <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                <FaLock className='icon'/>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox" name="remember" id="remember" />
                    Remember me
                </label>
                <a href="#">Forgot password?</a>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
            <div className="signup-link">
                <p>Don't have an account? <a href="#">Sign up</a></p>
            </div>
        </form>
    </div>
)
}

export default Login