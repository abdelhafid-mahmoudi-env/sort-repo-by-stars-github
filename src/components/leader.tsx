import React from 'react'
import { StyleSheet, css } from "aphrodite";

const Loader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => isLoading ? (
    <div className={`${css(styles.container)}`}>
        <div className="ui active centered inline loader"></div>
        <p className={`${css(styles.text)}`}>loader</p>
    </div>
) : null;

export default Loader

const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    text: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        padding: 10
    }
})
