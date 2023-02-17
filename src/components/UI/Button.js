import React from "react";
import styles from "./Button.module.css"

const Button = (props) => {
    return (
        <button
            className={styles.button}
            type={props.type || 'button'}  //sets default value to button
            onClick={props.onClick}>
                     {props.children}
        </button>
    );
};

export default Button;