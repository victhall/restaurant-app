import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar'
import RestaurantDetails from '../RestaurantDetails';
import RestaurantList from '../RestaurantList';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [search, setSearch] = useState('');

  function searchHandler(e) {
    setSearch(e.target.value);
  };

  function submitHandler(e) {
    e.preventDefault();
    console.log('SUBMIT HANDLER', search)
  }
  
  useEffect(() => {
    async function fetchRestaurantData() {
      try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=toronto&categories=restaurants', {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
          }
        });
        const data = response.data.businesses;
        console.log(data)
        setRestaurantData([...data])
      } catch (error) {
        console.error(error)
      }
    }
    fetchRestaurantData();
  }, [])

  return (
    <>
      <Navbar onHandleSubmit={submitHandler} onHandleSearch={searchHandler}/>
      {<RestaurantList onSearch={search} restaurantData={restaurantData} setShowDetails={setShowDetails} />}
      {/* {ShowDetails ? <RestaurantDetails setShowDetails={setShowDetails} /> : null} */}
      {showDetails ? <RestaurantDetails setShowDetails={setShowDetails} /> : null}
    </>
  );
}


  // {users && users.filter((user) => {
  //   //if search input is blank, return list of users
  //   if (searchInput == "") {
  //     return user
  //     //if user contains search input characters, return those users
  //   } else if (user.username.toLowerCase().includes(searchInput.toLowerCase())) {
  //     return user
  //   }
  // }).map((user) => {
  //   //if logged in username matches username in list, do not show
  //   if (user.username === currentUser.displayName) {
  //     return null
  //   }
  //   return (
  //     <Contact
  //       key={user.username}
  //       className={classes['contact-list']}
  //       username={user.username}
  //       onStartChat={props.onStartChat}>
  //       {user.username}
  //     </Contact>
  //   )
  // })}