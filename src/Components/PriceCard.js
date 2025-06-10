"use client";
import "../app/CSS/PriceCard.css"

const PriceCard =({name, price, service,description }) =>{

    const addToCart = () => {
        const currentCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        const newItem = { name : name, service: service, price: price, image : "/internet.jpg" };
        sessionStorage.setItem("cart", JSON.stringify([...currentCart, newItem]));
    };

    return( <div className="pricecard">
    <div className="pricecontent">
      <div className="pricetitle">{name}</div>
      <div className="priceprice">${price}</div>
      <div className="pricedescription">{description}</div>
    </div>
      <button onClick={addToCart}>
        Buy now
      </button>
</div>
    )
}

export default PriceCard