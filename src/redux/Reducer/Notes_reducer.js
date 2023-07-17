import { ADD_NOTE, LOAD_NOTES, SET_LOADER, TOGGLE_NOTE } from "../Types";

const initialState = {
  notes: [],
  loading: false,
};

export const Note_Reducer = (previousState = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_LOADER:
      return { ...previousState, loading: true };

    case ADD_NOTE:
      return {
        ...previousState,
        loading: false,
        notes: [...previousState.notes, payload],
      };

    // case TOGGLE_NOTE:
    //   const new_Notes = previousState.notes.slice();
    //   let index = new_Notes.findIndex((note) => note.id === payload);
    //   let note = new_Notes[index];
    //   const newNote = { ...note, isImportant: !note.isImportant };
    //   new_Notes[index] = newNote;
    //   return { ...previousState, loading: false, notes: new_Notes };

    case LOAD_NOTES:
      return { ...previousState, loading: false, notes: payload };

    default:
      return previousState;
  }
};
