function OptionCard(props){
    return(
                <button key={props.id} id={props.name} className={`opt--card ${props.clName}`} data-value={props.Name}>
                <p className="radio"><span></span></p>
                <img src={`src/assets/${props.imagescr}`} alt="" />
                <p className="opt--name">{props.Name}</p>
                </button>
    )
}

export default OptionCard;