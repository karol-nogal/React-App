import React from "react";
import {Message, Form} from "semantic-ui-react"
import PageWrapper from "../components/PageWrapper";
import firebase from "firebase"
import Auth from "../components/Auth";


export default class Chat extends React.Component{
    state = {
        messages: [],
        message: ''
    };

    handleOnChange = (event) => {
        this.setState({
            message: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const userData = firebase.auth().currentUser;
        const msgObj = {
            author: userData.email,
            text: this.state.message
        };

        fetch('https://reast-api-b141b.firebaseio.com/messages.json', {
            method: 'POST',
            body: JSON.stringify(msgObj)
        });
    };

    componentDidMount() {
        firebase.database().ref('messages').on('value', snapshot => {
            const data = snapshot.val();
            this.setState({
                messages: Object.keys(data).map(el => ({ ...data[el], id: el })) || []
            })
        })
    }

    render() {
        return <PageWrapper>
            <Auth>
                <h1>Chat</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <input
                            type='text'
                            value={this.state.message}
                            onChange={this.handleOnChange}
                            placeholder='...' />
                    </Form.Field>
                </Form>
                {
                    this.state.messages.slice(-10).reverse().map(message => {
                        return <Message key={message.id}>
                            <b>{message.author}</b>
                            <p>{message.text}</p>
                        </Message>
                    })
                }
            </Auth>
        </PageWrapper>
    }
}