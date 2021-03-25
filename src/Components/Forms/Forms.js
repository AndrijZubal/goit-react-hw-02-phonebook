import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formCss from './Form.module.css';
import { v4 as id } from 'uuid';

class Forms extends React.Component  {
    state = {
        name: '',
        number: ''
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({id:id(), ...this.state});
        this.reset();
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    reset = () => {
        this.setState({ name: '', number: ''});
    };
    
    render() {
        const { name, number } = this.state;
        return (
            <div>
                <form
                    className={formCss.form}
                    onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type='text'
                            placeholder="Enter phone name"
                            name='name'
                            onChange={this.handleChange}
                            value={name}
                        className={formCss.input}>
                        </input>
                    </label>
                        <label >Number
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            name="number"
                            onChange={this.handleChange}
                            value={number}
                        className={formCss.input}>

                        </input>
                        </label>
                    <button type='submit'
                    className={formCss.button}>Add contact</button>
                </form>
                
            </div>
        );
    };
};

Forms.propTypes = {
    onSubmit: PropTypes.func
};


export default Forms;
