const initialState = {
  listTask: []
};
export default (state = initialState, action) => {
  switch (action.type) {
   case 'CREATE_TASK':
    console.log("Reducer", action);

    return {...state, listTask: [...state.listTask, action.payload] }
    case 'UPDATE_TASK':
    return {...state, listTask: action.payload.task}
   default:
   return state;
  }
}