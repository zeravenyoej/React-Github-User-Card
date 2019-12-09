import React from 'react';

class Card extends React.Component {
    constructor (props) {
        super(props)
    };

    render () {
        return (
            <div>
                <h2>{this.props.user.name}</h2>
                <h2>{this.props.user.login}</h2>
                <h2>{this.props.user.location}</h2>
            </div>
        )
    }
}

export default Card;