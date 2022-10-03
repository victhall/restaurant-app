import Restaurant from './Restaurant'
import classes from './RestaurantList.module.css'

export default function RestaurantList({ restaurantData, setShowDetails }) {

  return (
    <div className={classes['restaurant-list']} onClick={() => {
      setShowDetails(true)
      console.log('TRUE')
    }}>
      {restaurantData && restaurantData.map(restaurant => {
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