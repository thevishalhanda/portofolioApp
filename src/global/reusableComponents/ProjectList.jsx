import React from "react"
import projectImage from "../images/project.png"
import "../css/projectList.css"

const ProjectList = () => {
    return(
        <>
        <a
        href = "goggle.com"
        >
            <img  src = {projectImage}  className = "projectImg" />
        </a>
        
        </>
    )
}

export default ProjectList;