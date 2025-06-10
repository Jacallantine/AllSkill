export default function Card({name, image, vouch})
{
    
   return <div className="card mx-auto md:mx-0">
  <div className="first-content">
    <span><p className="name font-bold font-weight-700">{name}</p><img src={image}/></span>
    <p className="absolute bottom-0 font-medium bg-gray-900 text-base px-4 py-1">See Review</p>

  </div>
  <div className="second-content">
<span>{vouch}</span>
  </div>


</div>
}