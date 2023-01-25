import { StCardStyle } from "./styled-component";

function StCard(props) {
    return(
        <StCardStyle>
            <img src={props.photo} alt="cardImg" />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div>
                <span>
                    <i>{props.oldCost}</i>
                    <p>{props.cost}</p>
                </span>
                <span>
                    <button className="fa-solid fa-cart-circle-plus"></button>
                    <button className="fa-solid fa-"></button>
                </span>
            </div>
            
        </StCardStyle>
    )
}