
import "../app/CSS/PcCard.css"


const ItemCard = ({name, price, service }) => {
  const addToCart = () => {
    const currentCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    const newItem = { name : name, service: service, price: price, image : "/internet.jpg" };
    sessionStorage.setItem("cart", JSON.stringify([...currentCart, newItem]));
};
  return (
      <div className="e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop flex flex-col ">    
          <h1>{name}</h1>
          <div className="price-name">Price: ${price}</div>
          <button className='button' onClick={addToCart}><span className=''>Add</span></button>
        </div>
      </div>
  );
}

export default ItemCard;