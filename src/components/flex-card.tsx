import * as React from "react"

export const Container: React.FC = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export const Avatar: React.FC<{ source: string }> = ({ source }) => {
    return (
        <div className="image">
            <img src={source} />
        </div>
    )
}

export const Content: React.FC = ({ children }) => {
    return (
        <div className="content">
            {children}
        </div>
    )
}

export const Header: React.FC<{ title: string, callback: () => void }> = ({ title, callback }) => {
    return (
        <div className="header" style={{ cursor: "pointer" }} onClick={callback}>
            {title}
        </div>
    )
}

export const Description: React.FC<{ description: string; }> = ({ description }) => {
    return (
        <div className="content">
            {description}
        </div>
    )
}

export const Footer: React.FC = ({ children }) => {
    return (
        <div className="footer" style={{ marginTop: 40 }}>
            {children}
        </div>
    )
}

export const Icon: React.FC<{ counter: number, name: string, color: string, icon: string }> = ({ icon, counter, name, color }) => {
    return (
        <div className="ui labeled button" tabIndex={0}>
            <div className={`ui ${color} button`}>
                <i className={icon}></i> {name}
            </div>
            <a className={`ui basic ${color} left pointing label`}>
                {counter}
            </a>
        </div>
    )
}

export const Submited: React.FC = ({ children }) => {
    return (
        <span className="ui" style={{ marginLeft: 20 }}>
            {children}
        </span>
    )
}