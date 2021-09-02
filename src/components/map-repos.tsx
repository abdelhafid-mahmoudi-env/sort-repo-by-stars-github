import * as React from 'react'
import { Repository } from '../addons/repo/prop';
import CardRepository from './card-repository';

const MapRepos: React.FC<{ repositories: Repository[] }> = ({ repositories }) => {
    if (!repositories.length) return <span>Loading initial repositories</span>;
    return (
        <div className="ui one horizontal cards">
            {repositories.map((repo, index) => <CardRepository key={index} {...repo} />)}
        </div>
    )
}

export default MapRepos;
