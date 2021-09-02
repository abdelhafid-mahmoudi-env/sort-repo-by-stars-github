export type Repository = {
    name: string;
    description: string;
    stars: number;
    issues: number;
    username: string;
    avatar: string;
    created_at: string;
    html_url: string;
}

export type IGitState = {
    page: number;
    isFetching: boolean;
    repositories: Repository[];
    errors: string[];
}

export type IGitAction = {
    type: string;
    repositories?: Repository[];
    errors?: string;
}