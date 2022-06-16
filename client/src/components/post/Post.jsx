import "../post/post.css"
import {MoreVert} from "@mui/icons-material"
// import { Users } from "../../exampleData"
import { useEffect,useState} from 'react'
import axios from "axios" 

export default function Post({post}) {
    
    const [likes,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user,setUser] = useState({})

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=> {

        const fetchUser = async() =>{
    
        const res = await axios.get(`users/${post.userId}`);
        setUser(res.data);
    
        }
        fetchUser()
},[])




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
                        <img className="postProfileImg" src= {user.profilePicture || PF + "profilePictures/noCover.png"} alt="" />
                        <span className="postUserName">{post.userName}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight"></div>
                    <MoreVert/>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className = "postImg" src= {PF+post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className = "likeIcon" src={`${PF}Icon/likeButton.png`} onClick={likeHandler} alt="" />
                        <img className = "likeIcon" src={`${PF}Icon/heartButton.jpg`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{likes} person likes this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> comments{post.comments}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}
