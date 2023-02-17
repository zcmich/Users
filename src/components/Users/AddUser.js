import React, { useState } from "react";

import Card from "../../components/UI/Card"
import Button from "../../components/UI/Button"
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css"

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                    title:'Invalid Input',
                    message: 'Please enter a valid name and age(non-empty values)'
                })
            return;
        }

        if (+enteredAge < 0) {
            setError({
                title:'Invalid Age',
                message: 'Please enter a valid  age(age > 0)'
            })
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

    const errorHandler = () => {
        setError(null);
    };

    return (

        <div>

            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

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
        </div>
    );

};

export default AddUser;