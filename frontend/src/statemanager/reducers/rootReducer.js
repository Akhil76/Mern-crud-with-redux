import { combineReducers } from "redux";
import postReducer from "./postReducer";
import createpostReducer from "./createpostReducer";
import deletepostReducer from "./deletepostReducer";
import editpostReducer from "./editpostReducer";

const rootReducer = combineReducers({
    posts:postReducer,
    newpost:createpostReducer,
    deletepost: deletepostReducer,
    updatepost: editpostReducer
});


export default rootReducer;