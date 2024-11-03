import React, {useState, useEffect} from 'react'
import  Container from '../components/container/Container'
import PostCard from "../components/postcard"
import appwriteService from "../appwrite/config";
import "./allposts.css"
function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className="post-section">
      <div className="post-section-all">
      <Container>
        <div className="wrapper">
            <div className="container-allposts">
                <div className="post-grid">
                    {posts.map((post) => (
                        <div key={post.$id} className="post-item">
                            <PostCard {...post} />

                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="container-allposts">
                <div className="post-grid">
                    {posts.map((post) => (
                        <div key={post.$id} className="post-item">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="container-allposts">
                <div className="post-grid">
                    {posts.map((post) => (
                        <div key={post.$id} className="post-item">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="container-allposts">
                <div className="post-grid">
                    {posts.map((post) => (
                        <div key={post.$id} className="post-item">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="container-allposts">
                <div className="post-grid">
                    {posts.map((post) => (
                        <div key={post.$id} className="post-item">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Container>
      </div>
</div>


                )}

export default AllPosts