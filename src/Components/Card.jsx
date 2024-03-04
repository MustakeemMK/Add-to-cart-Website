import React from 'react'
import '../Styles/Card.css';

const Card = ({item, handleClick}) => {
  return (
    <div className='cards'>
        <div className="image_box">
            <img src={item.img} alt="image"/>
        </div>
        <div className="details">
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <p>Price : {item.price}/-Rs</p>
            <button onClick={()=> handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card