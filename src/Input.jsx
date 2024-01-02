import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props){

    const [isExpanded, setExpanded] = React.useState(false);
    const [note, setNote] = React.useState({
        title:"",
        text:"",
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNote((prevValue) => {
            if(name === "title"){
                return{
                    title : value,
                    text : prevValue.text,
                }
            }else if(name === "note"){
                return {
                    title : prevValue.title,
                    text : value,
                }
            }
        })
    }

    function expandArea(){
        setExpanded(true);
    }

    return (<form className="create-note">
        {isExpanded && (
            <input 
                onChange={handleChange} 
                name="title" 
                placeholder="Title" 
                value = {note.title}/>
        )}
        <textarea 
            onClick={expandArea} 
            onChange={handleChange} 
            name="note" 
            placeholder="Write your note" 
            value={note.text}
            rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
            <Fab onClick={(event) => {
                props.onAdd(note);
                setNote({
                    title: "",
                    text: "",
                });
                event.preventDefault();
            }}><AddIcon /></Fab>
        </Zoom>
    </form>)
}

export default Input;