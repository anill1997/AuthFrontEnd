import React, { Component } from 'react'
import { request, setAuthToken } from '../axios-helper';
import axios from 'axios';

export default class AuthContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    };

    componentDidMount(){
        // const username = 'user';
        // const password = 'e909b30e-b30e-43f1-843e-05fa16ef8529';
  

        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:8080/message', 
        //     auth: {
        //       username: username,
        //       password: password,
        //     },
        //   }).then((response) => {
        //     console.log(response.data);
        //     this.setState({ data : response.data });
        //   })

        request(
          "GET", "/message", {}
        ).then((response) => {this.setState({data : response.data})});
    };
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className='col-4'>
            <div className='card'>

               {this.state.data && this.state.data.map((line) => <p>{line}</p>)}
            </div>
        </div>
      </div>
    )
  }
}
