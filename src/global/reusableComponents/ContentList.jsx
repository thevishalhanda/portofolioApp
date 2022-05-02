import React from "react"
import projectImage from "../images/project.png"
import "../css/contentList.css"

const ContentList = () => {
    return(
        <>
        <a
        href = "goggle.com"
        >
            <img  src = {projectImage}  className = "contentImg" />
        </a>
        
        </>
    )
}

export default ContentList;