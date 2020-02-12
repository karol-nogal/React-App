import React from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";

class Auth extends React.Component {
    state = {
        user: null,
        ref: null
    };

    componentDidMount() {
        const authRef = firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user
            })
        })

        this.setState({
            ref: authRef
        })
    }

    componentWillUnmount() {
        if(this.state.ref) {
            this.state.ref();
        }
    }

    render() {
        return this.state.user
            ? this.props.children
            : <>
                <h1>Pleas sign in first to make any changes </h1>
                <Link to='/register'>Sign in</Link>
            </>
    }
}

export default Auth;