import React from 'react';
import axios from 'axios';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      users: []
    }
  }

  componentDidMount() {
    this.fetchData('zeravenyoej')
  };


  fetchData= (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res=>{
        console.log(res.data);

        this.setState({
          ...this.state,
          users: [res.data]
        })
      })
      .catch(err=>{
        console.log('err: ', err)
      }); 
  };


  render() {
    return (
      <div>
        <h1>My program</h1>

        {this.state.users.map((user, index)=>{
            return <Card key={index} user={user}/>
        })}
      </div>
    )
  };
};

export default App;
