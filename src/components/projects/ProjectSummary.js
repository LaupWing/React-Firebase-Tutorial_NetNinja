import React from 'react'

const ProjectSummary = (props) =>{
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <div className="card-title">
                    <span className="card-title">Project {props.project.title}</span>
                    <p>Posted by the Net Ninja</p>
                    <p className="grey-text">3rd September, 2am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary