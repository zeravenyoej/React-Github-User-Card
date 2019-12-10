import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      user: {}
    }
  }

  componentDidMount() {
    this.fetchData('zeravenyoej')
  };
  

  fetchData= (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res=>{
        console.log('my data: ', res.data);

        this.setState({
          user: res.data
        })
      })
      .catch(err=>{
        console.log('err: ', err)
      }); 
  };

  render() {
    return (
      <div>
        <Card user={this.state.user}/>
      </div>
    )
  };
};

export default App;
