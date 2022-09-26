import classes from './Restaurant.module.css'

export default function Restaurant(props) {
 return (
  <>
 <img className={classes['restaurant-img']} src={props.image}/>
  <h2>{props.name}</h2>
  <p>{props.rating}</p>
  <p>{props.price}</p>
  <p>{props.cuisines}</p>
  </>
 ) 
}