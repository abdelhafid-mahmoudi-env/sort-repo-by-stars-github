/**
 * if you asked why i create this costum reducer
 * ==> because i have the problem of complexity
 */

export const reduceActions = (actionMap: any, state: any, action: any) => {
    if (actionMap[action.type]) return actionMap[action.type](state, action);
    return state;
}

export const createReducer = (initialState: any = {}, actionMap: any = {}) => {
    return (state = initialState, action = {}) => reduceActions(actionMap, state, action)
}

export default createReducer;