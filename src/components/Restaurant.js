import classes from './Restaurant.module.css'
import ReactStars from "react-rating-stars-component";

export default function Restaurant(props) {

  return (
    <div className={classes['restaurant-container']}>
      <img className={classes['restaurant-img']} src={props.image} />
      <div className={classes['inner-container']}>
        <h2 className={classes['restaurant-name']}>{props.name}</h2>
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
          <p className={classes.price}>{props.price}</p>
          <p className={classes.cuisines}>&#x2022; {props.cuisines}</p>
          <p className={classes.cuisines}>&#x2022; {props.address}</p>
        </div>
      </div>
    </div>
  )
}