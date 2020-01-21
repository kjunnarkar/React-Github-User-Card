import React from 'react';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import './App.css';

class App extends React.Component {

  state = {
    myInfo: 'kjunnarkar',
    followers: []
  }

  componentDidMount() {
    
    fetch(`https://api.github.com/users/${this.state.myInfo}`)
      .then(response => response.json())
      .then(data => {
        console.log('Here is my Data:', data );
        
        this.setState({ ...this.state.myInfo, myInfo: data });
      })
      .catch(error => console.log('Did not reach API', error));

    fetch(`https://api.github.com/users/${this.state.myInfo}/followers`)
      .then(res => res.json())
      .then(followData => {
        console.log('Here is follower data:', followData);

        this.setState({ ...this.state.followers, followers: followData})
      })
      .catch(error => console.log('Did not get Follower Data', error));
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kiran's GitHub User Card</h1>
        </header>
          <h2>My User Card</h2>
          <UserCard item={this.state.myInfo} />
          <h2>My GitHub Followers</h2>
          {this.state.followers.map(data => {
            return <FollowerCard key={data.id} item={data} />
          })}
      </div>
    )
  }
}

export default App;
