import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Users extends Component {
      state = {
        users: []
      };

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="Card">
      {this.state.users.map((user) =>
            <div className="container" key={user.id}>
              <img src={'https://www.w3schools.com/howto/img_avatar.png'} alt={"Avatar"} />
              <h4><b>{user.username}</b></h4>
              <p>{user.name}</p>
            </div>)}
      </div>
    );
  }
}

class App extends Component {
  state = {
    response: ''
  };


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .then(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <Users />
      </div>
    );
  }
}

export default App;
