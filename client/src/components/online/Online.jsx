import "../../components/online/online.css"

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
         <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src= {PF+user.profilePicture} alt="" className="profileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{user.userName}</span>
            </li>
  
  )
}
