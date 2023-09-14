import { useState } from "react";

const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup"

const SignUpForm = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify({username: username, password: password}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const result = await response.json();
            setToken(result.token)            
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>        
            <h2 className="sign-up">Sign Up</h2>
            { error && <p>{error}</p> }
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} minLength={8} required/>
                </label>
                <br />
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required/>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>        
        </>
    )
}

export default SignUpForm;