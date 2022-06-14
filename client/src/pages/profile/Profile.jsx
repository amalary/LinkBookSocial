import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "../profile/profile.css"
export default function Profile() {
return (

<>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">

                <img className = "profileCoverImg"src ="assets/profilePictures/newYorkUnsplash.jpg" alt = ""/>
                <img className = "profileUserImg"src ="assets/profilePictures/peterParker.jpg" alt = ""/>
                </div>
                <div className="profileInfo">
                    <h4 className = "profileInfoName">Peter Parker</h4>
                    <span className = "profileInfoDesc">I am your friendly neighbohood Spiderman </span>
                </div>
            </div>
            <div className="profileRightBottom">
        <Feed/>
        <Rightbar className = "pr"/>
            </div>

        </div>

        </div>
        </>

  
  )
}
