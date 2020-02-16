import React, {Component} from 'react';
import {CardList} from "./components/card-list/CardList";
import {SearchBox} from "./components/searchBox/SearchBox";
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      monsters:[
      ],
      searchField:''
    }
  }
  handleChange = (e) =>{this.setState({searchField:e.target.value})}

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=> this.setState({monsters:users}))
  }

  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
        <div className="App">
          <h1 className="title"> Monsters Rolodex  </h1>
          <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}

App.propTypes = {};

export default App;