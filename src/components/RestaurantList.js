import Restaurant from './Restaurant'
import classes from './RestaurantList.module.css'

export default function RestaurantList(props) {

  return (
    <div className={classes['restaurant-list']} onClick={() => {
      props.setShowDetails(true)
      console.log('TRUE')
    }}>
      {props.restaurantData && props.restaurantData.filter((restaurant) => {
        //if search input is blank, return list of users
        if (!props.onSearch) {
          return restaurant
          //if user contains search input characters, return those users
        } else if (restaurant.name.toLowerCase().includes(props.onSearch.toLowerCase())) {
          return restaurant
        }
      }).map(restaurant => {
        return <Restaurant
          key={restaurant.id}
          name={restaurant.name}
          rating={restaurant.rating}
          price={restaurant.price}
          address={restaurant.location.display_address}
          image={restaurant.image_url}
          cuisines={restaurant.categories[0].title}
          phone={restaurant.display_phone}
          url={restaurant.url}
        // setShowDetails={setShowDetails}
        />
      })}
    </div>
  )
}

// {props.restaurantData && props.restaurantData.filter((restaurant) => {
//   //if search input is blank, return list of users
//   if (search == "") {
//     return restaurants
//     //if user contains search input characters, return those users
//   } else if (restaurant.name.toLowerCase().includes(search.toLowerCase())) {
//     return restaurant
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