import ReactStars from "react-rating-stars-component";
import classes from './RestaurantDetails.module.css'
import { GoLocation } from "react-icons/go";
import { FaUtensils } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";


export default function RestaurantDetail(props) {
  return (
    <>
      <div className={classes['restaurant-container']}>
        <img className={classes['restaurant-img']} src={props.image} />
        <div className={classes['inner-container']}>
          <h2>{props.name}</h2>

          <div className={classes['star-rating']}>
            <p>{props.rating}</p>
            <ReactStars
              count={props.rating}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#fe6f61"
            />

          </div>
          <div className={classes['price-cuisine']}>
            <p className={classes.cuisines}><GoLocation />  {props.address}</p>

            <p className={classes.cuisines}><FaUtensils /> {props.cuisines}</p>
            <p className={classes.price}>{props.price}</p>
          </div>

        </div>

      </div>

      <div className={classes['review-container']}>

        <p className={classes.website}><BsLink45Deg /> {props.website}</p>
        <p className={classes.phone}><BsTelephone/> {props.phone}</p>

        <h2>Reccomendations</h2>
        <form>
          <label>Sort by</label>
          <input placeholder="Newest" />
        </form>

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