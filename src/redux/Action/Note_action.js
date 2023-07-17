import { db } from "../../Firebase";
import { ADD_NOTE, LOAD_NOTES, SET_LOADER, TOGGLE_NOTE } from "../Types";

export const add_new_note = (data) => async (dispatch) => {
  //asynchronas task db/api
  try {
    dispatch({ type: SET_LOADER});
    await db.collection("notes").doc(data.id.toString()).set(data);
    dispatch({ type: ADD_NOTE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//toggle  notes means when user add to important 
export const toggle_note = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADER});
    const snapShot = db.collection("notes").doc(id.toString());
    const data = (await snapShot.get()).data();
    console.log(snapShot )
    await snapShot.update({
      isImportant: !data.isImportant,
    });
    dispatch(load_notes());
  } catch (error) {
    console.log(error.message);
  }
};

//loading notes
export const load_notes = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADER});
    const snapShot = await db.collection("notes").get();
    const all_notes = snapShot.docs.map((doc) => doc.data());
    dispatch({ type: LOAD_NOTES, payload: all_notes });
  } catch (error) {
    console.log(error.message);
  }
};
