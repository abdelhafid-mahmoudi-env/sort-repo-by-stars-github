import { combineReducers } from "redux";
import repoReducer from "./repo/reducer";

const reducers = combineReducers({
    repo: repoReducer,
});

export default reducers;