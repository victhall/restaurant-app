import classes from './Navbar.module.css'
import SearchBar from './SearchBar'
import { FiChevronDown } from "react-icons/fi"
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";


export default function Navbar(props) {

  return (
    <nav className={classes['navbar-container']}>
      <SearchBar onHandleSubmit={props.onHandleSearch} onHandleSearch={props.onHandleSearch}/>

      <div className={classes.menu}>
        <button className={classes['menu-btn']}>Map</button>
        <button className={classes['menu-btn']}>Favourites</button>
      </div>
      <div className={classes.profile}>
        <div className={classes['profile-img']}><img className={classes.pfp} src='../../pfp.png' /></div>
        <div className={classes.username}>fishsoup69</div>
        <FiChevronDown />
      </div>
    </nav>
  )
}