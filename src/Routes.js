import React from'react'
import Home from './Home.js'
import Menu from './Menu.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


const Routes = () =>{
return(
    <Router> 
        <Menu />
        <Route exact={true} path='/' component={null} />
        <Route exact={true} path='/login' component={Home} />
    </Router>
)

}

export default Routes