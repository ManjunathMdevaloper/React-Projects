import React, { useEffect, useState } from 'react'
import '../api.css'
const Shopping = () => {
   let [shop , setShop] = useState([])
   useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(resp=>resp.json())
        .then(ele=>setShop(ele))
   },[shop])
  return (
    <>
        <div className="shopping">
            {
                shop.map((e)=>{
                    let {title,price,description,category,image,rating} = e
                    let {rate,count} = rating
                    return(
                        <>
                            <div className="api-block">
                                <img src={image} alt="" />
                                <div className="main">
                                    <h1>{title}</h1>
                                    <p id='rating'>{rate} ☆ </p>
                                    <p id='count'>{count} Ratings </p>
                                    <p>{description}</p>
                                    <h4> Category : {category}</h4>
                                </div>
                                <h1>₹ {price*80}</h1>
                            </div>
                            <hr />
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default Shopping
