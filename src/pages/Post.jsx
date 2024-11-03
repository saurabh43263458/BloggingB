import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import Button from "../components/button"
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import "./post.css"
export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getpost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.DeletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="post-main-container">
            <div className="post-wrapper">
        <Container>
            <div className="post-container">
              <div className="post-img">
              <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="post-image"
                />
              </div>
    
                {isAuthor && (
                    <div className="button-container">
                       <div>
                       <Link to={`/edit-post/${post.$id}`}>
                            <Button className="edit-button">Edit</Button>
                        </Link>
                       </div>
                        <div><Button className="delete-button" onClick={deletePost}>
                            Delete
                        </Button></div>
                    </div>
                )}
            </div>
            <div className="title-container">
                <h1 className="post-title">{post.title}</h1>
            </div>
            <div className="content-container">
                {parse(post.content)}
            </div>
        </Container>
    </div>
        </div>
    
    ) : null;
}
