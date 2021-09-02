import createReducer from "../../utils/create-reducer";
import * as Props from "./prop";
import * as Types from "./type";
import * as Handlers from "./handler";

const INITIAL_STATE: Props.IGitState = {
    page: 0,
    isFetching: false,
    repositories: [],
    errors: [],
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.REQUEST]: Handlers.request,
    [Types.SUCCESS]: Handlers.success,
    [Types.FAILLER]: Handlers.failler
});

export default reducer;