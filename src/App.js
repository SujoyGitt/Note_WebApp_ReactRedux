import React, { useEffect, useState } from "react";
import "./App.scss";
import AllNotes from "./Components/AllNotes";
import CreateNotes from "./Components/CreateNotes";
import ImportentNotes from "./Components/ImportentNotes";
import { store } from "./redux/store";
import { load_notes } from "./redux/Action/Note_action";
import { useSelector } from "react-redux/es/hooks/useSelector";

const App = () => {
 const loading = useSelector(state=>state.Note_Reducer?.loading);

  useEffect(() => {
    store.dispatch(load_notes());
  }, []);
  return (
    <div className="container">
      <CreateNotes />
      {loading && (
        <div id="outer">
          <div id="middle">
            <div id="inner"></div>
          </div>
        </div>
      )}
      <hr />
      <ImportentNotes />
      <hr />
      <AllNotes />
    </div>
  );
};

export default App;
