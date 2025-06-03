
import "../app/CSS/PcCard.css"


const PcCard = ({name, price, partType, items, id}) => {

  const part = items.find((item) => item.id === id);
  if (!part) return null; 

  const handleAdd = () => {
    const currentBuild = JSON.parse(sessionStorage.getItem("pcBuild") || "{}");

    currentBuild[partType] = { id: part.id, name: part.name, price: part.price };

    sessionStorage.setItem("pcBuild", JSON.stringify(currentBuild));
    alert(`${part.name} added to ${partType.toUpperCase()}`);
    console.log(currentBuild)
  };
  return (
      <div className="e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop flex flex-col ">    
          <h1>{name}</h1>
          <div className="name">Price: ${price}</div>
          <button onClick={handleAdd} className='button'><span className=''>Add</span></button>
        </div>
      </div>
  );
}

export default PcCard;