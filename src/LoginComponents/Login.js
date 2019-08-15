import React from 'react'

const Login = (props) => {
    return <div>
        <input id='usename' placeholder='username' type='text'/>
        <br />
        <input id='password' placeholder='password' type='password'/>
        <br />
        <button id='login'>Login</button>
    </div>
}

export default Login