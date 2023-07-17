import React from "react";
import "./CreateNotes.scss";
import { useState } from "react";
import { add_new_note } from "../redux/Action/Note_action";
import { useDispatch } from "react-redux";

const CreateNotes = () => {
  const [note, setNote] = useState("");
  let dispatch = useDispatch();
  let SubmitEvent = (e) => {
    e.preventDefault();
    const data = {
      note,
      date: new Date().toJSON().slice(0, 10),
      id: Math.floor(Math.random() * 1000),
      isImportant: false,
    };
    
    dispatch(add_new_note(data))    // empty input field after adding notes
    setNote("");
  };
  return (
    <div className="createnotes">
      <form onSubmit={SubmitEvent}>
        <textarea
          id="textarea"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write Your dream note..."
        ></textarea>
        <button type="submit">Add Notes</button>
      </form>
    </div>
  );
};

export default CreateNotes;
