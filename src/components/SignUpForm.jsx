import {useState} from "react"

export default function signUpForm({setToken}) {
    const API_URL = "https://fsa-jwt-practice.herokuapp.com/signup"
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")   
    const [error, setError] = useState(null) 

    async function handleSubmit(event) {
    event.preventDefault();
    // console.log("Hello World");
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({username, password}),
            header: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json()
        console.log(result)
        setToken(result.token)
    } catch (error) {
        setError(error.message)
        
    }
}

    return (  
    <>
       <h2>Sign Up!</h2>
       {error && <p>{error}</p>}
       <form onSubmit={handleSubmit}>
            <label>
                Username: {""}
                 <input value={username.data} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>
                Password: {""}
                 <input 
                    type = "password" value = {password} onChange ={(e) => setPassword(e.target.value)}
                 />
            </label>
            <button>Submit</button>
        </form>
        </>
    );
}
