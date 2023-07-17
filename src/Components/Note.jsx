import React from "react";
import "./Note.scss";
import { connect } from "react-redux";
import { toggle_note } from "../redux/Action/Note_action";

const Note = ({ note: { date, note, id, isImportant }, toggle_note }) => {

  return (
    <div className="card" style={{ paddingBottom: "10px" }}>
      <div className="card_header">{date}</div>
      <div className="card_body">{note}</div>
      <button className="importent" onClick={() => toggle_note(id)}>
        {isImportant ? "Remove Note" : "Add Note"}
      </button>
    </div>
  );
};

export default connect(null, { toggle_note })(Note);
