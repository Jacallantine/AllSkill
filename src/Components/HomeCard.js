import "../app/CSS/HomeCard.css"

export default function HomeCard({product, description, href})
{
    return <a href={href}><div className="card">
      <p className="card-title">{product}</p>
      <p className="small-desc">
       {description}
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div></a>
}