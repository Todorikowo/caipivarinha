import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

// função footer
function Footer(){
    return(
        <div className="footer">
            {/* botão redes sociais */}
            <div className="socialMedia">
                <Link to="https://www.instagram.com/caipivarinha/"><SlSocialInstagram /></Link>
                <Link to="https://www.facebook.com/profile.php?id=61568704972943"><SlSocialFacebook /></Link>
            </div>
            {/* copyright */}
            <p> &copy; Caipivarinha 2024
                Entre em contato com: caipivarinhabebidas@gmail.com
            </p>
        </div>
    )
}

export default Footer;