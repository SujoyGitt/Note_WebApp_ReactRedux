import React from "react";
import "./AllNotes.scss";
import Note from "./Note";
import {useSelector,useStore } from "react-redux";

const AllNotes = () => {
  const notes = useSelector((state) => state.Note_Reducer?.notes);
  const store = useStore();
  console.log(store.getState());
  return (
    <div className="allNotes">
      <h3>All Notes</h3>
      <div className="note_container">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
