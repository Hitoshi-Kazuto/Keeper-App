import React from "react";

let currDate = new Date();
let currYear = currDate.getFullYear();

const FooterStyle = {
    color: "#FFFFFF",
    margin: "0px",
    padding: "0px",

    fontSize: "15px",
    fontFamily: "Rubik Doodle Shadow",
}

const divStyle = {
    position: "absolute",
    left: "0px",
    bottom: "0px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#001C30",
    margin: "0px",
    padding: "0px",

    width: "100%",
    height: "5vh",    
}

function Footer(){
    return <div style={divStyle}>
        <p style={FooterStyle}>© Keeper App {currYear}</p>
    </div>
}

export default Footer;