import '../feed/feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
// import {Posts} from "../../exampleData"
import { useEffect,useState} from 'react'
import axios from "axios"

export default function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(()=> {

    const fetchPosts = async() =>{

      const res = await axios.get("posts/timeline/6282ad1393a0d88b0d7aa7e7");
      setPosts(res.data);

    }
    fetchPosts()
  },[])

  return (
    <div className='feed'>
        
        <div className="feedWrapper"></div>
        <Share/>
        {posts.map((p) => (
          <Post  key = {p.id} post = {p} />

        ))}


    </div>
  )
}
