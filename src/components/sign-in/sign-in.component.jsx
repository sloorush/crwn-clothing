import React from 'react'

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
                    <h2>I alREADY HAVE AN ACCOUNT</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} name='email' type='email' value={this.state.email} required />
                        <label>Email</label>
                        <input onChange={this.handleChange} name='password' type='password' value={this.state.password} required />
                        <label>Password</label>
                        <input type='submit' value='Submit Form' />
                    </form>
                
                </div>
            )
        }
    }

export default SignIn