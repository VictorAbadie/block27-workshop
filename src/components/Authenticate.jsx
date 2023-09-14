import {useState} from "react"

export default function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null)
    const API_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate"

  
const handleClick = async() => {
        try {
            // console.log("Hello world") Testing button and it DOES work
            const response = await fetch
            (API_URL, {
                   method: "GET",
                   headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                   }   
                  }
               );
        const result = await response.json();
        // console.log("Authenticate Result:", result)
        setSuccessMessage(result.message);
        setUsername(result.data.username)
        } catch (error) {
            setError(error.message);
        }
    }

    return ( 
    <>

     <h2>Authenticate!</h2>
     {username && <p>Welcome, {username}!</p>}
     {successMessage && <p>{successMessage}</p>}
     {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>

     </>
)}