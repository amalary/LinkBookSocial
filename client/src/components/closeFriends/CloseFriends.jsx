import "../closeFriends/closeFriends.css"

export default function CloseFriends(user) {
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
return (
    

<div>
    <li className="sidebarFriend">
    <img src= {user.profilePicture} alt="" className='sidebarFriendImg' />
    <span className='sidebarFriendName'>{user.profileName}</span>
    </li>
</div>
)
}
