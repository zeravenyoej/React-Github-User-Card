import React from 'react';

// class Followers extends React.Component {
//     // constructor() {
//     //     super();
//     // };

//     render () {
//         return (
//             <div className='followersDiv'>
//                 <p>{this.props.follower.login}</p>
//             </div>
//         )
//     }
// };

const Followers = (props) => {
    return (
        <div className='followersDiv'>
            <p>{props.follower.login}</p>
        </div>
    );
};

export default Followers;