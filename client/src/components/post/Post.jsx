import "../post/post.css"
import {MoreVert} from "@mui/icons-material"
import { Users } from "../../exampleData"
import { useState } from "react"


export default function Post({post}) {
    
    const [likes,setLike] = useState(post.likes)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =()=> {
        setLike(isLiked ? likes-1 : likes+1)
        setIsLiked(!isLiked)
    }
    
    return (
    <div> 
        
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img className="postProfileImg" src= {Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
                        <span className="postUserName">{Users.filter((u) => u.id === post?.userId)[0].userName}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight"></div>
                    <MoreVert/>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className = "postImg" src= {post.photo} alt="Selfie of spiderman on top of empire state building" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className = "likeIcon" src="assets/Icon/likeButton.png" onClick={likeHandler} alt="" />
                        <img className = "likeIcon" src="assets/Icon/heartButton.jpg" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{likes}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comments}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}
