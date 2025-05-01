import React from "react";
import styles from './error.module.css';





const ErrorPage = () => {

    return (
        <div id={styles.mainContainer}>
            <h1>404</h1>
            <p>Oops! Page not found</p>
            <p>Sorry, but the page you are looking for is not found.Please make sure you have typed the correct URL.</p>
        </div>

    )
}


export default ErrorPage