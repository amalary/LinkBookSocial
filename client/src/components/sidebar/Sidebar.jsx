import '../sidebar/sidebar.css'
import {RssFeedSharp,ChatSharp,VideocamSharp,GroupsSharp,BookmarkSharp,HelpSharp,WorkSharp,EventAvailableSharp,SchoolSharp} from "@mui/icons-material"
import {Users} from "../../exampleData"; 
import CloseFriends from "../closeFriends/CloseFriends"

export default function Sidebar() {

return (
    <div className='sidebar'>
        
       <div className="sidebarWrapper">
          <ul className="sidebarList">
              <li className="sidebarListItem">
                  <RssFeedSharp className='sidebarIcon'/>
                  <span className="sidebarListItemText">Feed</span>
              </li>
              <li className="sidebarListItem">
                  <ChatSharp className='sidebarIcon'/>
                  <span className="sidebarListItemText">Chat</span>
              </li>
              <li className="sidebarListItem">
                  <VideocamSharp className='sidebarIcon'/>
                  <span className="sidebarListItemText">Videos</span>
              </li>
              <li className="sidebarListItem">
                  <GroupsSharp className='sidebarIcon'/>
                  <span className="sidebarListItemText">Groups</span>
              </li>
              <li className="sidebarListItem">
                  <BookmarkSharp className='sidebarIcon'/>
                  <span className="sidebarListItemText">Bookmarks</span>
              </li>
              <li className="sidebarListItem">
                  <HelpSharp className='sidebarIcon'/>
                  <span className="sidebarListItemText">Questions</span>
              </li>
              <li className="sidebarListItem">
                  <WorkSharp className='sidebarIcon'/>
                  <span className="sidebarListItemText">Jobs</span>
              </li>
              <li className="sidebarListItem">
                  <EventAvailableSharp className='sidebarIcon'/>
                  <span className="sidebarListItemText">Events</span>
              </li>
              <li className="sidebarListItem">
                  <SchoolSharp className='sidebarIcon'/>
                  <span className="sidebarListItemText">Courses</span>
              </li>
          </ul>
          <button className='sidebarButton'>Show More</button>
          <hr className='sidebarHr'/>
          <ul className="sidebarFriendList">

             {Users.map((u) => (
                <CloseFriends key = {u.id} user = {u}/>
             ))}
            </ul>
             
         
       </div>
    
        
    </div>
)
}
