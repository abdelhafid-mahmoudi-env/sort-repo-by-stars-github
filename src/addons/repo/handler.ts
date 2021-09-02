import * as Props from "./prop";

export const request = (state: Props.IGitState, action: Props.IGitAction) => ({
    ...state,
    isFetching: true,
});

export const success = (state: Props.IGitState, action: Props.IGitAction) => ({
    ...state,
    repositories: [
        ...state.repositories,
        ...(action.repositories || [])
    ],
    errors: [],
    isFetching: false,
    page: state.page + 1,
});

export const failler = (state: Props.IGitState, action: Props.IGitAction) => ({
    ...state,
    isFetching: false,
    errors: action.errors
});