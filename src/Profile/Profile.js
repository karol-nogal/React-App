import React from "react";
import PageWrapper from "../components/PageWrapper";
import {Button} from "semantic-ui-react"
import firebase from "firebase"
import Auth from "../components/Auth";

export default class Profile extends React.Component{
    state={
        file:null
    }
handleOnClick=()=>{
    const userId = firebase.auth().currentUser.uid
    firebase.storage().ref('avatars/'+userId)
        .put(this.state.file)
        .then((res)=>{
            res.ref.getDownloadURL()
            
        })
}
handleOnChange=(event)=>{
    this.setState(
        {
            file: event.target.files[0]
        }
    )
}
    render(){
        return(
           <PageWrapper>
               <Auth>
                <div>Add New Avatar </div>
                <input onChange={this.handleOnChange} type="file"></input>
                <Button positive onClick={this.handleOnClick}> Add </Button>
                </Auth>
           </PageWrapper> 
        )
    }
}