import React from 'react'

import {signInWithGoogle} from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    };

    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

        render() {
            return (
                <div className='sign-in'>
                    <h2>I AlREADY HAVE AN ACCOUNT</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput label='Email' handleChange={this.handleChange} name='email' type='email' value={this.state.email} required />
                        <FormInput label='Password' handleChange={this.handleChange} name='password' type='password' value={this.state.password} required />
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle}>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </form>
                </div>
            )
        }
    }

export default SignIn