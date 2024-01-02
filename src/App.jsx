import React from "react";
import Header from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import Input from "./Input";


function App(){
    const [noteList, setNoteList] = React.useState([])

    function addNote(note){
        setNoteList((prevItems) => {
            return [...prevItems, note];
        });
    }
    function deleteNote(id){
        setNoteList((prevItems) => {
            return prevItems.filter((noteItem, index) => {
                return (index !== id);
            });
        });
    }
    return (
        <div>
            <Header />
            <Input onAdd={addNote}/>
            {noteList.map((noteItem, index) => (
                <Note 
                    key = {index}
                    id={index}
                    title = {noteItem.title}
                    text = {noteItem.text}
                    onDelete = {deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;