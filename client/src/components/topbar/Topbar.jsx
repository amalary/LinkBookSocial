import "./topBar.css"
import {SearchSharp, PersonSharp,ChatSharp, NotificationsSharp} from "@mui/icons-material"
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
    <div className = "topBarContainer">
        
        <div className="topBarLeft">

          <Link to ="/" style = {{textDecoration:"none"}}>
          <span className="logo">LinkBook</span>
          </Link>

        </div>


        <div className="topBarCenter">

          <div className="searchBar">
            <SearchSharp className = "searchIcon"/>

            <input placeholder = "Search" className="searchInput"/>
          </div>


        </div>

        <div className="topBarRight">

          <div className="topBarLinks">
            <span className="topBarLink">Homepage</span>
            <span className="topBarLink">Timeline</span>


          </div>

          <div className="topBarIcons">
            <div className="topBarIconItem">
              <PersonSharp/>
              <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
              <ChatSharp/>
              <span className="topBarIconBadge">4</span>
            </div>
            <div className="topBarIconItem">
              <NotificationsSharp/>
              <span className="topBarIconBadge">3</span>
            </div>
          </div>
          <Link to = "/profile/:userName">
          <img src="assets/profilePictures/peterParker.jpg" alt="" className="topBarImg" />
          </Link>


        </div>
        
        
        
        </div>
  )
}; 
