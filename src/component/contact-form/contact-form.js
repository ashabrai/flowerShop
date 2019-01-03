import React from 'react';
import PropTypes from 'prop-types';
import './contact-form.scss';
import jackiFlower from '../../images/jackiFlower.jpg';

const emptyState = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

class ContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = emptyState;
    };

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };


    handleSubmit = (event) => {
        event.preventDefault();

        let formData = {
            formSender: this.state.name,
            formEmail: this.state.email,
            formSubject: this.state.subject,
            formMessage: this.state.message
        };

        if(formData.formSender.length < 1 || formData.formSubject < 1 || formData.formMessage < 1) {
            return false;
        }
        this.setState(emptyState);
    };

    render() {
        return (
            <div className='formLayout'>
            <form onSubmit={this.handleSubmit}>
                <img src ={jackiFlower}/>
                <h2 className='titleOnForm'> Contact Form </h2>
                <div className='form-Submit'>
                    <input
                        name='name'
                        placeholder = 'Name'
                        onChange = {this.handleChange}
                    />
                    <input
                        name='email'
                        placeholder='Email'
                        onChange={this.handleChange}
                    />
                    <input
                        name='subject'
                        placeholder='Subject'
                        onChange={this.handleChange}
                        />
                    <textarea
                        name='message'
                        placeholder='Message Here'
                        onChange={this.handleChange}
                        />
                    <button className='buttonStyle' type='submit'> Submit</button>
                </div>
            </form>
            </div>
            );
        }
    }
    ContactForm.propTypes = {
        onComplete: PropTypes.func,
};

export default ContactForm;
