import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchableUserTable from './table.js';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  getSideBar()

  render() {
    return (
      <div className="wrapper">
        
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Collapsible Sidebar</h3>
          </div>

          <ul className="list-unstyled components">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li><a href="#">Page1</a></li>
                  <li><a href="#">Page2</a></li>
                  <li><a href="#">Page3</a></li>
                </ul>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
           </li>
          </ul>

        </nav>
        
        <div id="content">
          <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
            <i className="glyphicon glyphicon-align-left"></i>
              Toggle Sidebar
          </button>
        </div>
      </div>
    );
  }
}

class Users extends Component {
      state = {
        users: []
      };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
  }

  render() {
    return (
      <div className="card">
      {this.state.users.map((user) =>
            <div className="container" key={user.id}>
              <img src={'https://www.w3schools.com/howto/img_avatar.png'} alt={"Avatar"} width={'200px'}/>
              <h4><b>{user.username}</b></h4>
              <p>{user.name}</p>
            </div>)}
      </div>
    );
  }
}

const USERS = [
  { id: 1, name: 'Jarek', age: 28, city: "Wellingborough", active: true, position: 'Developer'},
  { id: 2, name: 'Darek', age: 60, city: "Gdansk", active: true, position: 'Manager'},
  { id: 3, name: 'Lukasz', age: 38, city: "Wellingborough", active: true, position: 'Designer'},
  { id: 4, name: 'Mark', age: 25, city: "Milton Keynes", active: false, position: 'Designer'},
  { id: 5, name: 'Ian', age: 35, city: "Raunds", active: true, position: 'Developer'},
  { id: 6, name: 'Steve', age: 34, city: "London", active: true, position: 'Developer'},
  { id: 7, name: 'Tom', age: 22, city: "Paris", active: false, position: 'Data Analyst'},
  { id: 8, name: 'Becky', age: 23, city: "Manchester", active: true, position: 'Designer'},
  { id: 9, name: 'Gary', age: 47, city: "Berlin", active: false, position: 'Developer'},
  { id: 10, name: 'Tonny', age: 30, city: "Glasgow", active: true, position: 'Server Admin'},
  { id: 11, name: 'Kasia', age: 42, city: "Gdansk", active: true, position: 'Developer'}
];

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
        <SideBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div class="container">
          <p className="App-intro">{this.state.response}</p>
        
          <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>Title!</strong> Alert body ...
          </div>
            <SearchableUserTable />
         {/* <Users /> */}
        </div>
        

      </div>
    );
  }
}

export default App;
