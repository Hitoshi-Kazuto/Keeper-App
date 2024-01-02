import React from "react";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

// const HeaderStyle = {
//     color: "#FFFFFF",
//     margin: "0px",
//     padding: "0px",
//     marginLeft: "20px",
//     fontSize: "45px",
//     fontFamily: "Rubik Doodle Shadow",
// }
// const divStyle = {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "#001C30",
//     margin: "0px",
//     padding: "0px",
//     width: "100%",
//     height: "15vh",
//     marginTop: "0px"
// }

function Header(){
    return <header>
            <h1><BookmarkAddIcon /> Keeper App</h1>
        </header>
}

export default Header;