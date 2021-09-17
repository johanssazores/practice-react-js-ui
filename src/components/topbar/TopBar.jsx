import { Link } from 'react-router-dom'
import "./topbar.css"

// font-family: 'Raleway', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Varela', sans-serif;
// font-family: 'Varela Round', sans-serif;

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
       <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-github-square"></i>
          <i className="topIcon fab fa-linkedin"></i>
          <i className="topIcon fab fa-twitter-square"></i>
       </div>
       <div className="topCenter">
         <ul className="topList">
           <li className="topListItem">
              <Link className="link" to="/">HOME</Link> 
            </li>
           <li className="topListItem">
              <Link className="link" to="/">ABOUT</Link> 
           </li>
           <li className="topListItem">
              <Link className="link" to="/">CONTACT</Link> 
           </li>
           <li className="topListItem">
              <Link className="link" to="/write">WRITE</Link> 
           </li>

           {user && <li className="topListItem">LOGOUT</li>}
         </ul>
       </div>
       <div className="topRight">
        {user ? (
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </Link>
          ) : (
            <>
              {/* <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                </Link>
                </li>
             </ul> */}
            </>
          )}
         <i className="topSearchIcon fas fa-search"></i>
       </div>
    </div>
  )
}