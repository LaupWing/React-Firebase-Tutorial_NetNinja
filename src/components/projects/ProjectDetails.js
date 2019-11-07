import React from 'react'

const ProjectDetails = (props) => {
    const {id} = props.match.params

    return (
        <div className="container section project-details">
            <div className="card-content">
                <div className="card-title">
                    <span className="card-title">Project {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ut, soluta earum consequuntur minima quas illum, voluptate, hic dolorem ex blanditiis dolore quisquam dicta maxime? Ipsum nemo labore distinctio modi.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Laup Wing</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails