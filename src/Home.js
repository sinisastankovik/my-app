import React from 'react'
import Login from './LoginComponents/Login.js'
import Register from './LoginComponents/Register.js'


class Home extends React.Component {

    constructor (props){
        super(props)
        this.state={
            componentToRender: 'Login',
            buttonText: 'Register new account'
           
        }
}

switch = () => {
    if(this.state.componentToRender === 'Login') {
        this.setState ({
            'componentToRender':'Register',
            'buttonText':'Sign In'
        })
    }else
    this.setState ({
        'componentToRender':'Login',
        'buttonText':'Register new account'
    })
}

render() {
    let component 
    console.log(this.props.match.params.id)
    if( this.state.componentToRender === 'Login')
    component =<Login />
    else component =<Register />
  

    return <div>
        {component}
        <br />
    <button id= 'swithComponent' onClick={this.switch}>
        {this.state.buttonText}
                </button>
                </div>
   
    
    
}

}

export default Home