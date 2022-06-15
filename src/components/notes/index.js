import React, {Fragment, useEffect, useState} from "react";
import {Column, Button, List} from 'rbx';
import { pushRotate as Menu } from 'react-burger-menu';
import ListNotes from "./list";
import NotesServices from "../../services/notes";
import '../../styles/notes.scss';
import Editor from './editor'
import Search from "./search";

const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState({title: '', body:'', id:''});

    async function fetchNotes(){
        const response = await NotesServices.index();
        if (response.data.length >= 1){
            setNotes(response.data.reverse());
            setCurrentNote(response.data[0])
        }else{
            setNotes([]);
        }
    }

    const selectNote = (id)=>{
        const note = notes.find((note)=>{
            return note._id == id
        })
        setCurrentNote(note);
    }

    useEffect(() =>{
        fetchNotes();
    }, []);

    const createNote = async () =>{
        NotesServices.create()
        fetchNotes();
    } 

    const updateNote = async (oldNote, params) =>{
        const updatedNote = await NotesServices.update(oldNote._id, params );
        const index = notes.indexOf(oldNote);
        const newNotes = notes;
        newNotes[index] = updatedNote.data;
        setNotes(newNotes);
        setCurrentNote(updatedNote.data)
    }

    const deleteNote = async (note) =>{
        await NotesServices.delete(note._id);
        fetchNotes();
    }

    const searchNotes = async (query) =>{
        const response = await NotesServices.search(query);
        setNotes(response.data)
    }

    return(
        <Fragment>
            <Column.Group className="notes" id="notes">
                <Menu
                    pageWrapId={"notes-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId={"notes"}
                    customBurgerIcon={false}
                    customCrossIcon={false}
                     >
                    <Column.Group >
                        <Column size={10} offset={1}>
                            <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
                        </Column>
                    </Column.Group>
                    <ListNotes 
                        notes = {notes}
                        selectNote = {selectNote}
                        currentNote = {currentNote}
                        createNote = {createNote}
                        deleteNote = {deleteNote} />
                </Menu>
                <Column size={12} className="notes-editor" id="notes-editor">
                    <Editor
                        note = {currentNote} 
                        updateNote = {updateNote} />
                </Column>
            </Column.Group>
        </Fragment>
    );
}

export default Notes;