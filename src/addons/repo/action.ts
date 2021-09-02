import * as Types from "./type";
import * as Props from "./prop";

export const request = () => ({
    type: Types.REQUEST
});

export const success = (repositories: Props.Repository[]) => ({
    type: Types.SUCCESS,
    repositories,
});

export const failler = (errors: string[]) => ({
    type: Types.FAILLER,
    errors,
});
