import classes from './Navbar.module.css'
import SearchBar from './SearchBar'
import { FiChevronDown } from "react-icons/fi"

export default function Navbar() {
  return (
    <nav className={classes['navbar-container']}>
      <div>
        <SearchBar />
      </div>
      <div className={classes.menu}>
        <button className={classes['menu-btn']}>Map</button>
        <button className={classes['menu-btn']}>Favourites</button>
      </div>
      <div className={classes.profile}>
        <div className={classes['profile-img']}><img className={classes.pfp} src='../../pfp.png' /></div>
        <div className={classes.username}>v___oria</div>
        <FiChevronDown />
      </div>
    </nav>
  )
}