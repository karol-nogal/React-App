import React from "react";
import { Menu, Button, Image } from 'semantic-ui-react';
import { Link} from "react-router-dom";
import firebase from "firebase";
import avatarPlaceholder from "../src/assets/dog.jpeg";

export class NavMenu extends React.Component{
    state={
        user:null,
        url: this.props.avtarURL
    };
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            this.setState({user})
        })
        
    }
    componentDidUpdate(){
        if(!this.state.url){
            this.getAvatarUrl()
        }
    }
    handleSignOut=()=>{
        firebase.auth().signOut();
    }
    getAvatarUrl=()=>{
        if(this.state.user){
        firebase.storage().ref('avatars/'+this.state.user.uid).getDownloadURL()
            .then(url=>{
                this.setState({
                    url
                })
            })
        }
    }
    render(){
        return(
            <Menu inverted>
                <Link to="/">
                <Menu.Item
                    name='home'/>
                </Link>
                <Link to="/github">
                <Menu.Item
                    name='github '/>
                </Link>
                <Link to="/counter">
                    <Menu.Item name="counter"/>
                </Link>
                <Link to="/burgers">
                    <Menu.Item name="Burgers"/>
                </Link>
                <Link to="/chat">
                    <Menu.Item name="Chat"/>
                </Link>
                <Menu.Menu position='right'>
                    {
                        !!this.state.user
                        ?<div style={{display: "inherit"}}>
                            <Image src={this.state.url || avatarPlaceholder} avatar/>
                            <Link to="/profile">
                                <Menu.Item name={`Hello ${this.state.user.email}`}/>
                            </Link>
                            
                            <Button inverted onClick={this.handleSignOut}>Sign Out</Button>
                            </div>
                        
                        :<Link to="/login">
                            <Menu.Item name='Login'/>
                        </Link>
                        
                    }
                    
                </Menu.Menu>
          </Menu>
        )
    }
}