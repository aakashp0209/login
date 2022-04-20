import { useState } from 'react';
import './App.css';
import axios  from "axios";

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi =() => {
    console.log({ email, password})
     axios.post('https://reqres.in/api/login',{
       email : email,
       password: password
     })
     .then(result=>{
       console.log(result.data)
       alert("Success")
     })
     .catch(error=> {
       console.log(error)
       alert("Error")
     })
  }
 
  

  return(
    <div className="App">
      Email : <input value={email} onChange={handleEmail} type="text" /> <br/>
      Password :<input value={password} onChange={handlePassword} type="password" /> <br/>
      <button onClick={handleApi}>Login </button>
    </div>
  )
}
export default App;
