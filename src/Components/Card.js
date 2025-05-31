export default function Card({name, image, vouch})
{
    
   return <div className="card mx-auto md:mx-0">
  <div className="first-content">
    <span><p className="name">{name}</p><img src={image}/></span>
  </div>
  <div className="second-content">
<span>{vouch}</span>
  </div>


</div>
}