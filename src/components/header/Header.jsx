import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Johanss Blog App</span>
        <span className="headerTitleLg">Dev Player</span>
      </div>
      <img 
        className="headerImg" 
        src="https://wallpapercave.com/wp/wp2088528.jpg" 
        alt="" />
    </div>
  )
}