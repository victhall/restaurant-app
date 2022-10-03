import ReactStars from "react-rating-stars-component";
import classes from './RestaurantDetails.module.css'
import { GoLocation } from "react-icons/go";
import { FaUtensils } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";


export default function RestaurantDetails(props) {
  return (
    <>
      <div className={classes['restaurant-container']}>
        <img className={classes['restaurant-img']} src={props.image} />
        <div className={classes['inner-container']}>
          <h2>Giulietta</h2>
          <p className={classes.cuisines}>Italian</p>

          <div className={classes['star-rating']}>
            <p>{props.rating}</p>
          </div>
          <div className={classes['price-cuisine']}>
            <p className={classes.cuisines}><GoLocation />  51 King St W, Toronto, ON</p>
            <p className={classes.phone}><BsTelephone/> (416) 747-1768</p>
            <p className={classes.website}><BsLink45Deg /> www.gui.com</p>


            <p className={classes.price}>{props.price}</p>
          </div>

        </div>

      </div>

      <div className={classes['review-container']}>


        <h2>Reccomendations</h2>
        <div className={classes['inner-review__container']}>

        <div className={classes.profile}>
        <img className={classes.pfp} src='../../pfp.png' />
        <p>fishsoup69</p>
        <p>Toronto</p>
        </div>

        <div className={classes['rating-review__container']}>
        <ReactStars
          count={props.rating}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#fe6f61"
        />
        <p>Highly recommend giving it a try! Everything about the night was exceptional. Service was amazing, food was excellent, the manager was going around introducing himself to everyone and ensuring they had a good time.</p>
        </div>

        </div>

      </div>
    </>
  )
}