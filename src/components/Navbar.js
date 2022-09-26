import classes from './Navbar.module.css'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <nav className={classes['navbar-container']}>
      <div>
        <SearchBar />
      </div>
      <div>
        <button>Map</button>
        <button>Favourites</button>
      </div>
      <div className={classes.profile}>
        <div><img className={classes.pfp} src='../../pfp.png' /></div>

        <div>victoriavictoria</div>
      </div>
    </nav>
  )
}