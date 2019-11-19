import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
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
        this.props.signUp(this.state)
    }
    handelChange= (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const {auth, authError} = this.props
        if(auth.uid){
            return <Redirect to='/'/>
        }
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
                        <button className="btn pink lighten-1 z-depth-0">Signup</button>
                        <div className="red-text center">
                            {authError ? <p>{authEror}</p>:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        auth: state.firebase.auth,
        authEror: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signUp: (newUser)=> dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
