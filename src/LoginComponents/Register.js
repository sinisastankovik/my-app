import React from 'react'

const Register = (props) => {
    return <div>
        <input id='email' placeholder='email' type='text' />
        <br />
        <input id='usename' placeholder='username' type='text' />
        <br />
        <input id='password' placeholder='password' type='password' />
        <br />
        <input id='confirm-password' placeholder='confirm password' type='password' />
        <br />
        <button id='Regsiter'>Register</button>
    </div>
}

export default Register