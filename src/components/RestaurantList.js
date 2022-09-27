import Restaurant from './Restaurant'
import classes from './RestaurantList.module.css'

const dummy_data = [
  {
    name: 'Miss Likklemore\'s',
    rating: 4.6,
    price: '$$',
    address: '433 King St W, Toronto, ON M5V 1K4',
    website: 'https://misslikklemores.com/',
    image: 'https://resizer.otstatic.com/v2/photos/xlarge/2/49263409.png',
    cuisines: 'Jamaican',
    dining_style: 'Casual Dining',
    phone_number: '(647) 484-8789'
  },
  {
    name: 'Prime Seafood Palace',
    rating: 4.7,
    price: '$$$$',
    address: '944 Queen St W, Toronto, ON M6J 1G8',
    website: 'http://www.primeseafoodpalace.ca/',
    image: 'https://resizer.otstatic.com/v2/photos/xlarge/1/48385453.jpg',
    cuisines: 'Canadian',
    dining_style: 'Fine Dining',
    phone_number: '(416) 551-8038'
  },
  {
    name: 'JaBistro',
    rating: 4.7,
    price: '$$$$',
    address: '222 Richmond St W, Toronto, ON M5V 1V6',
    website: 'http://www.jabistro.com/',
    image: 'https://resizer.otstatic.com/v2/photos/xlarge/2/27876883.jpg',
    cuisines: 'Japanese',
    dining_style: 'Casual Elegant',
    phone_number: '(647) 748-0222'
  },
  {
    name: 'Giulietta',
    rating: 4.7,
    price: '$$$$',
    address: '972 College Street, Toronto, ON M6H1A5',
    website: 'http://giu.ca/',
    image: 'https://resizer.otstatic.com/v2/photos/xlarge/1/25346079.jpg',
    cuisines: 'Italian',
    dining_style: 'Casual Dining',
    phone_number: '(416) 964-0606'
  },
  {
    name: 'Viaggio',
    rating: 4.7,
    price: '$$$',
    address: '1727 Dundas St W, Toronto, ON M6K 1V4',
    website: 'http://viaggiorestaurant.ca/',
    image: 'https://resizer.otstatic.com/v2/photos/xlarge/1/26280985.png',
    cuisines: 'Italian',
    dining_style: 'Casual Dining',
    phone_number: '(416) 519-8165'
  },
  {
    name: 'Tondou Ramen Okinawan Restaurant',
    rating: 4.4,
    price: '$$',
    address: '596 College St, Toronto, ON M6G 1B4',
    website: 'https://www.tondouramentoronto.com/',
    image: 'https://media.blogto.com/listings/20180618-2048-Tondou17.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    cuisines: 'Japanese',
    dining_style: 'Casual Dining',
    phone_number: '(416) 588-8317'
  }
]

export default function RestaurantList() {
  return (
    <div className={classes['restaurant-list']}>
      {dummy_data.map(restaurant =>
        <Restaurant
          key={restaurant.name}
          name={restaurant.name}
          rating={restaurant.rating}
          price={restaurant.price}
          address={restaurant.address}
          image={restaurant.image}
          dining_styles={restaurant.dining_style}
          phone={restaurant.phone_number}
          website={restaurant.website}
          cuisines={restaurant.cuisines}
        />
      )}
    </div>
  )

}