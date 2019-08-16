import React from'react'
import Routes from './Routes.js'

import { Link } from "react-router-dom"
 
const Menu = () => {
     return <ul className ='nav'>
<li id='home' className='nav-link'>
<Link className='nav-link' to='/'>Home</Link>
</li>
<li id='about' className='nav-link'>
<Link className='nav-link' to='/about'>About</Link>
</li>
<li id='contact' className='nav-link'>
<Link className='nav-link' to='/contact'>Contact</Link>
</li>
<li id='login' className='nav-link'>
<Link className='nav-link' to='/login'>Login</Link>  
</li>

     </ul>
 }
 export default Menu