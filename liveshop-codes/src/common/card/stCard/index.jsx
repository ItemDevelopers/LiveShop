import "./style.css"

function StCard(props) {
    return(
        <div className="stCard">
            <img src={props.photo} alt="cardImg" />
            <h2>Title{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam, dolore et laborum quis aliquam beatae tempora laudantium fugit magni.{props.text}</p>
            <div>
                <span>
                    <i>1,800{props.oldCost}</i>
                    <p>1,600{props.cost}</p>
                </span>
                <span>
                    <button className="fa-solid fa-cart-shopping"></button>
                    <button className="fa-solid fa-box"></button>
                </span>
            </div>
        </div>
    )
}
export default StCard