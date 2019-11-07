import React, { Component } from 'react'

class SignUp extends Component {
    state={
        password: '',
        email:'',
        firstName: '',
        lastName: ''
    }
    handelSubmit= (e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    handelChange= (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">Firstname:</label>
                        <input type="text" id="firstName" onChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Lastname:</label>
                        <input type="text" id="lastName" onChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" onChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" onChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
