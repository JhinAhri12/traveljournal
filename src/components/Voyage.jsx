import '../styles/voyage.css'

export default function Voyage(props){
    return(
        <>
            <div className="flex">
                <img src={props.item.imageUrl} alt="" />
                <div className='content'>
                    <div className='space'><span className="city">{props.item.location}</span>&nbsp;&nbsp;<a target="blank" href={props.item.googleMapsUrl} alt="#">View on Google Maps</a></div>
                    <h2>{props.item.title}</h2>
                    <b>{props.item.startDate}&nbsp;-&nbsp;{props.item.endDate}</b>
                    <p>{props.item.description}</p>
                    
                </div>
            </div>
        </>
        
    )
}