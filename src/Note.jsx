import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete'; 
import ClearIcon from '@mui/icons-material/Clear';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


const divStyle = {
    backgroundColor: "#96EFFF",
    borderRadius: "5px",
    width: "15%",
    height: "10vh",
    fonstSize: "5px",
    margin: "10px",
    padding: "20 0px",
}

const headStyle = {
    fontSize: "1.1em",
    margin: "10px",
    paddingTop: "5px",
}

const paraStyle = {
    fontSize: "1.1em",
    margin: "10px",
}

function Note(props){

    const [onHover, setHover] = React.useState(false);

    function handleClick(){
        props.onDelete(props.id)
    }
    function hoverDelete(){
        setHover(!onHover);
    }
    return <div className="note" onMouseEnter={hoverDelete} onMouseLeave={hoverDelete}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Zoom in={onHover}>
            <Fab onClick={handleClick}>
                <ClearIcon />
            </Fab>
        </Zoom>
    </div>
}

export default Note;