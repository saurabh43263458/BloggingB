import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import Container from '../components/container/Container'
import PostCard from '../components/postcard'
import "./home.css"

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    console.log(posts)
    if (posts.length === 0) {
        return (
            <div className="home-container">
            <Container>
                <div className="home-header">
                    <div className="home-title-wrapper">
                        <h1 className="home-title">Welcome to the Home Page</h1>
                    </div>
                </div>
            </Container>
        </div>
        
        )

    }
    return (
        
        <div className="home-posts-container">
            <Container>
            <div className='post-top'>
            <div className="home-p-wrapper">
             <PostCard {...posts[0]}/>  
            </div>
            </div>
            </Container>
    <div className='home-div-item'>
        <div className='items-two'>
            <div>
            <PostCard {...posts[2]}/> 
            </div>
            <div>
            <PostCard {...posts[4]}/> 
            </div>
        </div>
    </div>
    <div><p className='tending'>Trending.......</p></div>
    <Container>
        <div className="flex-post-home">
        <div className="home-posts-wrapper">
            
            {posts.map((post) => (
                <div key={post.$id} className="home-post-item">
                    <PostCard {...post} />
                </div>
            ))}
        </div>
        </div>
    </Container>
</div>

    )
}

export default Home