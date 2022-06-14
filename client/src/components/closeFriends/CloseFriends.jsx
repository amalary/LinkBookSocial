import "../closeFriends/closeFriends.css"

export default function CloseFriends(user) {
return (

<div>
    <li className="sidebarFriend">
    <img src= {user.profilePicture} alt="" className='sidebarFriendImg' />
    <span className='sidebarFriendName'>{user.profileName}</span>
    </li>
</div>
)
}
