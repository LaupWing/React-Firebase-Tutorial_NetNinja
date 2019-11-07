import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = ()=>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link className="brand-logo" to="/">MarioPlan</Link>
                {/* <Link></Link> */}
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar