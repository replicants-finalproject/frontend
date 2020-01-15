import React, { useState } from 'react';

function LoginInfo(props) {
    // const [company, setCompany] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let flaskEndpoint = props.hasChosen

    const data = {
        // company: company,
        username: username, 
        password: password
    }


    async function flask(flaskEndpoint, data) {
        try {
          const endpoint = `http://localhost:5000/api/${flaskEndpoint}`
          const configs = {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {'Content-type' : 'application/json'}
          }
          const res = await fetch(endpoint, configs);
          const json_res = await res.json();
          if (json_res) {
            sessionStorage.setItem("id", json_res['pk'])
            sessionStorage.setItem("user_type", props.hasChosen )
            props.setID(json_res['pk'])
          }
        } catch (err) {
          console.log(err)
        }
    }



    return(
        <div>
            <p>LOGIN INFO PAGE</p>
            {/* <label>Company:</label>
            <input onChange={(e)=>setCompany(String(e.target.value))}></input> */}
            <label>Username: </label>
            <input onChange={(e)=>setUsername(String(e.target.value))}></input>
            <label>Password: </label>
            <input onChange={(e)=>setPassword(String(e.target.value))}></input>

            <button onClick={(e)=>flask((flaskEndpoint + "_login"), data)}>Login</button>
            <button onClick={(e)=>flask((flaskEndpoint + "_create_account"), data)}>Sign Up</button>


        </div> 
    )
}

export default LoginInfo;