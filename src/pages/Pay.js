import React from "react";
import "../styles/Pay.css"
import Code from "../assets/qrcode.jpeg"
 
function Pay(){
    return(
        <div className="pagamento">
            <div className="container-pay">
                <h1>Obrigado pela sua compra!</h1>
                <img src={Code} alt="logo"/>
                <h1>Chave PIX: 20751464708</h1>
            </div>
        </div>
    )
}

export default Pay