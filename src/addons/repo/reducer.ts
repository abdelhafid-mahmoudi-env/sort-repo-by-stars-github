import createReducer from "../../utils/create-reducer";
import * as Props from "./prop";
import * as Types from "./type";
import * as Handlers from "./handler";
import moment from "moment";

// the date change only once the page is repload
const Last30Days = moment().subtract(30,'d').format('YYYY-MM-DD');

const INITIAL_STATE: Props.IGitState = {
    last30Day: Last30Days,
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