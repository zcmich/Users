import React, { useState } from "react";

import Card from "../../components/UI/Card"
import Button from "../../components/UI/Button"

import styles from "./AddUser.module.css"

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = (e) => {
        e.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) { 
            return;
        }

        if(+enteredAge < 0){
            console.log("Entered age less than zero")
            return;
        }

        props.onAddUser(enteredUserName, enteredAge)
        console.log("userName: " + enteredUserName + " Age: " + enteredAge);
        setEnteredUserName('');
        setEnteredAge('');

    };

    const userNameChangedHandler = (e) => {
        setEnteredUserName(e.target.value);
    };

    const ageChangedHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    return (
        <Card myClassName={styles.input}>
            <form onSubmit={addUserHandler}>
                <label>User Name</label>
                <input type="text"
                    value={enteredUserName}
                    onChange={userNameChangedHandler} />

                <label>Age(years)</label>
                <input type="number"
                    value={enteredAge}
                    onChange={ageChangedHandler} />

                <Button type="submit" >Add user</Button>

            </form>
        </Card>
    );

};

export default AddUser;