import React, { Component } from 'react'
import {createProject} from '../../store/actions/projectActions'
import {connect} from 'react-redux'

class CreateProject extends Component {
    state={
        title: '',
        content:''
    }
    handelSubmit= (e)=>{
        e.preventDefault()
        this.props.createProject(this.state)
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
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" onChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content:</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handelChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchActions = (dispatch)=>{
    return{
        createProject: (project)=>dispatch(createProject(project))
    }
}

export default connect(null,mapDispatchActions)(CreateProject) // second is actions that why there is a null there
