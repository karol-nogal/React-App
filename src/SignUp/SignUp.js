import React from "react";
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import firebase from "firebase";
import { Redirect } from "react-router";
import {Link} from "react-router-dom";
export default class SignUp extends React.Component{
    state={
        email:"",
        password:"",
        redirect: false,
        error: null
    }
    handleOnChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    Login=()=>{
        const {email,password}=this.state
        console.log("Login")
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.setState({
                redirect:true
            })

        })
    }
    Register=()=>{
        const {email,password}=this.state
        console.log("register")
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            this.setState({
                redirect:true
            })

        })
        .catch(error=>{
            this.setState({
                error
            })
        })
    }
    handleOnClick=(event)=>{
        event.preventDefault();
        this.isSingsUp() ? this.Login() : this.Register();
    }
    isSingsUp=()=>{
        return this.props.match.path.includes("login")
    }

    render(){
        const {email,password,redirect} = this.state

        if(redirect){
            return <Redirect to={"/"}/>
        }


        return <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                {this.isSingsUp() ? "Log-in to your account" : "Welcome Stranger"}
                </Header>
                {this.state.error? <div style={{color: "red"}}>Password must be at least 6 characters long</div>: null}
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input 
                        value={email}
                        onChange={this.handleOnChange}
                        name="email"
                        fluid 
                        icon='user' 
                        iconPosition='left' 
                        placeholder='E-mail address' 
                    />
                    <Form.Input
                        value={password}
                        onChange={this.handleOnChange}
                        name="password"
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
            
                    <Button color='teal' fluid size='large' onClick={this.handleOnClick}>
                    {this.isSingsUp() ? "Login" : "Register"}
                    </Button>
                   <span>
                   New to us? <Link to="/register"> Register</Link>
                       </span> 
                    </Segment>
                </Form>
                
                </Grid.Column>
          </Grid>
        
    }
}