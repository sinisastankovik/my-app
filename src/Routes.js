import React from'react'
import Home from './Home.js'
import Menu from './Menu.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const Routes = () =>{
return(
    <Router> 
        <Menu />
        <Switch>
        <Route exact={true} path='/' component={null} />
        <Route exact={true} path='/login' component={Home} />
        <Route exact component={PathError} />
        </Switch>
    </Router>
)

}

const PathError = () => {
    return <h1> Error 404! Not found</h1>
}
export default Routes