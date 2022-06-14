import "../../components/online/online.css"

export default function Online({user}) {
  return (
         <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src= {user.profilePicture} alt="" className="profileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{user.userName}</span>
            </li>
  
  )
}
