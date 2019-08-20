import React from 'react'

class Login extends React.Component {
    constructor () {
        super ()
        this.state = {
            username: '',
            password: ''
        }
    }
     onInputChange = (event) => {
         console.log (event.target.value)
         this.setState({
                [event.target.id]: event.target.value
         })
     }

     displayUserInput = () => {
         alert(this.state.username + this.state.password)
     }
    render () {
    return <div>
        <input 
        onChange={this.onInputChange}
        id='username' placeholder='username' type='text'/>
        <br />
        <input 
        onChange={this.onInputChange}
        id='password' placeholder='password' type='password'/>
        <br />
        <button onClick = {this.displayUserInput} id='login'>Login</button>
    </div>
}
}
export default Login