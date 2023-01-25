import "./style.css"
import img from "../../../assets/img/Graphic.jpg"

function StCard(props) {
    return(
        <div className="stCard">
            {props.sale ? <div className="saleBox"><p>{props.sale}</p></div>:null}
            <img src={props.img} alt="cardImg" />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div>
                <span>
                    <i>{props.oldCost}</i>
                    <p>{props.cost}</p>
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