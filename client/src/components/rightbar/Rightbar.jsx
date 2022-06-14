import '../rightbar/rightbar.css'
import Online from "../online/Online"
import {Users} from "../../exampleData"; 


export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
       <div className="birthdayContainer">
            <img className = "birthdayImg" src="assets/Icon/birthdayIconImg.png" alt="" />
            <span className="birthdayText"><b>Harry Osborn</b> and <b>2 other friends</b> have a birthday</span>
          </div>
          <img src="" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u => 
              <Online key = {u.id} user = {u} /> )}
            
          </ul>
      
      </>
    )
  }
  const ProfileRightbar = () => {

    return (<>

    <h4 className="rightbarTitle">User Information </h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City: </span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From: </span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship: </span>
        <span className="rightbarInfoValue">It's complicated</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User Friends </h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
      <img src="assets/profilePictures/maryjaneWatson.png" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src="assets/profilePictures/misterOsborn.jpg" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src="assets/profilePictures/stanLee.jpg" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src="assets/profilePictures/harryOsborn.jpg" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src="assets/profilePictures/charlesdevulio.jpg" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src="assets/profilePictures/gwenStacy.jpg" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    </div>

    </>
      )
    }
    
      return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
            {profile ? <ProfileRightbar/> :  <HomeRightbar/>}
              {/* <HomeRightbar/> */}
              
            </div>
            </div>
      )
    }

      


