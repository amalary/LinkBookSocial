import '../feed/feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from "../../exampleData"

export default function Feed() {
  return (
    <div className='feed'>
        
        <div className="feedWrapper"></div>
        <Share/>
        {Posts.map((p) => (
          <Post  key = {p.id} post = {p} />

        ))}


    </div>
  )
}
