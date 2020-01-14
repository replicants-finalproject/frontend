import React, { useState } from 'react';


function ShipperLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function Login() {
    try {
      const endpoint = 'http://localhost:5000/api/ShipperLogin'
      const data = {
        username: username, 
        password: password
      }
      const configs = {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {'Content-type' : 'application/json'}
      }
      const res = await fetch(endpoint, configs);
      const json_res = await res.json();
      if (json_res) {
        sessionStorage.setItem("id", json_res[0])
      }
    } catch (err) {
      console.log(err)
    }
  }




  return (
    <div>
      <p>ShipperLogin Page</p>
      <label>Username: </label>
      <input onChange={(e)=>setUsername(String(e.target.value))}></input>
      <label>Password: </label>
      <input onChange={(e)=>setPassword(String(e.target.value))}></input>
      <button onClick={(e)=>Login()}>Login</button>
    </div>
  )
};
export default ShipperLogin;