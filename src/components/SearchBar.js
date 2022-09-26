import classes from './SearchBar.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {

  // let queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/search';
  // const config = {
  //   headers: {
  //     "accept": "application/json",
  //     "x-requested-with": "xmlhttprequest",
  //     "Access-Control-Allow-Origin": "*",
  //     "Authorization": `Bearer ${process.env.BEARER_TOKEN}`
  //       }
  // }

  // axios.get(queryURL, config)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  return (
    <div className={classes.searchbar}>
      <form>

        <FiSearch className={classes['search-icon']}/>
        <input
          placeholder='Restaurant or Cuisine' />
      </form>
    </div>
  )
}