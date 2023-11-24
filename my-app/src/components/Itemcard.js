import React from 'react';
import {useCart} from "react-use-cart";


const Itemcard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="w-25 mx-0 mb-4">
          <div class="card p-0 overflow-hidden h-100 shadow" >
            <img src={props.img} class="card-img-top img-fluid "/>
              <div class="card-body text-center">
                <h5 class="card-title">{props.title}</h5>
                <h5 class="card-title"> MAD {props.price}</h5> 
                <p class="card-text">{props.desc}</p>
                <button className="btn btn-success" onClick={()=>addItem(props.item)}>Add to cart</button>
              </div>
        </div>
    </div>
    
  )
}

export default Itemcard
