
import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import "./postcard.css"
function PostCard({$id, title, featuredImage}) {
    
  return (
    <div className="postcard-main">
      <Link to={`/post/${$id}`}>
        <div className="container-post">
        <div className="image-wrapper">
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="image" />
        </div>
        <div className="title-of-item">
        <h2 className="title-postcard">{title}</h2></div>    </div>
    </Link>
    </div>
  )                              
}


export default PostCard;
