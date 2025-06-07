import React from 'react'
import classes from './Form.module.css'
import Header from './Header'
import InputForm from './InputForm'
const Form = () => {
    return (
        <div className={classes.form}>
            <Header />
            <InputForm />
        </div>
    )
}

export default Form
