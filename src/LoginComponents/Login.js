import React from 'react'
import LoggedInAs from './LoggedInAs.js'
import store, {saveUsername} from '../Redux/store.js'


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
        <button onClick = {() => store.dispatch(saveUsername(this.state.username))} id='login'>Login</button>
    
   <LoggedInAs />
    
    
    </div>
}
}

export default Login