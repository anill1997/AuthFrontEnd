import React, { Component } from 'react'
import WelcomeContent from './WelcomeContent'
import AuthContent from './AuthContent'
import './App.css'
import LoginForm from './LoginForm'
import axios from 'axios'
import Buttons from './Buttons'
import { setAuthToken, getAuthToken } from '../axios-helper'


export default class AppContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            componentToShow: "welcome",
            isAuthenticated: false
        };
    };

    componentDidMount() {
      const token = getAuthToken();
      if (token) {
          this.setState({ componentToShow: "message", isAuthenticated: true });
      }
  }

    login = () => {
        this.setState({componentToShow : "login"})
    }

    logout = () => {
        this.setState({componentToShow : "welcome" , isAuthenticated: false})
    }

    onLogin = (e, username, password) => {
        e.preventDefault();
        console.log("username : "+username+", password : "+password)
        axios({
            method: 'POST',
            url: 'http://localhost:8080/login', 
            auth: {
              username: username,
              password: password,
            },
            data : {
                login : username,
                password : password
            }
          }).then((response) => {
            console.log("Success " + response.data.token)
            this.setState({componentToShow: "message", isAuthenticated: true});
            setAuthToken(response.data.token);
        }).catch((error) =>{
            console.log("Error " + error)
            this.setState({componentToShow: "welcome"})
        })
    }

    onRegister = (e, firstName, lastName, username, password) => {
        e.preventDefault();

        axios({
            method: 'POST',
            url: 'http://localhost:8080/register', 
            auth: {
              username: username,
              password: password,
            },
            data : {
                firstName : firstName,
                lastName : lastName,
                login : username,
                password : password
            }
          }).then((response) => {
            this.setState({componentToShow: "message", isAuthenticated: true});
            setAuthToken(response.data.token);
        }).catch((error) =>{
            this.setState({componentToShow: "welcome"})
        })
    }

  render() {
    return (
      <div className='container' >
        <Buttons login={this.login} logout={this.logout} />
        {this.state.componentToShow === "welcome" && <WelcomeContent/>}
        {this.state.componentToShow === "message" && <AuthContent/> }
        {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister}/> }
      </div>
    )
  }
}
