import * as React from "react";
import { connect } from "react-redux";
import { IGitState, Repository } from "./addons/repo/prop";
import { IRootState } from "./addons/root-props";
import * as Actions from "./addons/repo/action";
import { fetchRepositories } from "./services/fetch-repositories";
import CardRepo from "./components/card-repository";
import Loader from "./components/leader";
import MapRepos from "./components/map-repos";
// import { AutoSizer, InfiniteLoader, List, WindowScroller } from "react-virtualized"

interface Props {
    request: typeof Actions.request;
    success: typeof Actions.success;
    failler: typeof Actions.failler;
    repo: IGitState;
}

const App: React.FC<Props> = (props) => {

    const [isBottom, setIsBottom] = React.useState(false);

    // handle the response ...
    const response = React.useCallback((repositories) => {
        let data: Repository[] = repositories.map((r: any) => ({
            name: r.full_name,
            description: r.description,
            stars: r.stargazers_count,
            issues: r.open_issues_count,
            username: r.owner.login,
            avatar: r.owner.avatar_url,
            created_at: r.created_at,
            html_url: r.html_url,
        }))
        props.success(data);
    }, []);

    // handle the error ...
    const error = React.useCallback((err) => {
        props.failler(["can't ..."])
    }, []);

    // initial the repositories on the loading ...
    React.useEffect(() => {
        props.request();
        const unsubscribe = fetchRepositories(1).then(response).catch(error);
    }, []);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
     * 
     * @returns 
     */
    const handleNewPageLoad = async () => {
        props.request();
        setTimeout(() => {
            let next_page = props.repo.page;
            fetchRepositories(next_page).then(response).catch(error);
        }, 4000);
        return;
    };

    function handleScroll() {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
            setIsBottom(true);
        }
    }

    React.useEffect(() => {
        if (isBottom) {
            handleNewPageLoad();
            setIsBottom(false);
        }
    }, [isBottom]);

    return (
        <div className="ui container" style={{ marginTop: 50 }}>
            <h1>React Infinite Scroll Demo</h1>
            <p> This is a simple showcase as the user scrolls, we fetch data about trending repositories from the GitHub API. </p>
            <MapRepos repositories={props.repo.repositories} />
            <Loader isLoading={props.repo.isFetching} />
        </div>
    )
}

const mapStateToProps = (state: IRootState) => ({
    repo: state.repo,
});

const mapDispatchToProps = (dispatch: any) => ({
    request: () => dispatch(Actions.request()),
    success: (repositories: Repository[]) => dispatch(Actions.success(repositories)),
    failler: (errors: string[]) => dispatch(Actions.failler(errors)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);