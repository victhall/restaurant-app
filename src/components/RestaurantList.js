import Restaurant from './Restaurant'
import classes from './RestaurantList.module.css'

export default function RestaurantList({ restaurantData }) {

  return (
    <div className={classes['restaurant-list']}>
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
        />
      })}
    </div>
  )
}
// restaurantData && restaurantData.filter((restaurant) => {
//   if(props.search == '') {
//     return restaurant
//   } else if (restaurant.name.toLowerCase().includes(propssearch.toLowerCase())) {
//     return restaurant
//   }
// })