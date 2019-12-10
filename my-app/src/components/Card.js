import React from 'react';
import axios from 'axios';
import Followers from './Followers';

class Card extends React.Component {
    constructor () {
        super()
        this.state={
            followers: []
        }
    };

    componentDidMount(){
        this.fetchFollowersData();
    };

    fetchFollowersData = () => {
        axios.get('https://api.github.com/users/zeravenyoej/followers')
            .then(res=>{
                console.log(res)
                this.setState({
                    followers: res.data
                })
            })
            .catch(err=>{
                console.log('err: ', err)
            })
    }

    render () {
        return (
            <div className='card'>
                <h1>{this.props.user.name}</h1>
                <img src={this.props.user.avatar_url}/>
                <div className='textBox'>
                    <h2>{this.props.user.login}</h2>
                    &nbsp;
                    <h2>{this.props.user.location}</h2>
                </div>

                {this.state.followers.map((follower, index)=>{
                    return <Followers key={index} follower={follower}/>
                })}
            </div>
        )
    }
}

export default Card;