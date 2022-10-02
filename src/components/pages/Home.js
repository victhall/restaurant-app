import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar'
import RestaurantDetails from '../RestaurantDetails';
import RestaurantList from '../RestaurantList';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);

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
      <Navbar />
      <RestaurantList restaurantData={restaurantData} />
      <RestaurantDetails />
    </>
  );
}

