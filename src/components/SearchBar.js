import classes from './SearchBar.module.css';
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';

export default function SearchBar(props) {
  const [search, setSearch] = useState('');

  function searchHandler(e) {
    setSearch(e.target.value);
  };

  function submitHandler(e) {
    e.preventDefault();

    props.onFilter(search)
  }

  return (
    <div className={classes.searchbar}>
      <form onSubmit={props.onHandleSubmit}>
        <FiSearch className={classes['search-icon']} />
        <input
          placeholder='Restaurant or Cuisine'
          type='text'
          onChange={props.onHandleSearch} />
      </form>
    </div>
  )
}
