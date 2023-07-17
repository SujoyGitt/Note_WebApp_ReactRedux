import React from "react";
import Note from "./Note";
import { connect } from "react-redux";
const ImportentNotes = ({ notes }) => {
  return (
    <div style={{ padding: "0px 10px" }}>
      <h4
        style={{
          fontSize: "22px",
          fontWeight: "400",
          color: "#969696",
          letterSpacing: "1px",
          margin: "10px 0px",
        }}>
        Importent Notes
      </h4>
      <div
        className="importent_notes_container"
        style={{
          paddingBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}>
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <Note key={note.id} note={note}/>
          ))}
      </div>
    </div>
  );

};

//connect is use to connect to redux to react component
let mapStateToProps = (state) => ({ notes: state.Note_Reducer.notes });
export default connect(mapStateToProps)(ImportentNotes);
