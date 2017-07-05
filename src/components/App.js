import React from 'react';
import NavBar from './NavBar';
import ProfileCard from './ProfileCard';
import Trends from './Trends';
import TweetForm from './TweetForm';
import TweetFeed from './TweetFeed';
import WhoToFollow from './WhoToFollow';

class App extends React.Component {
  render() {
    return (
      <div className="component-App">
        <NavBar />
        <div className='main container-fluid'>
          <div className='component-Dashboard container'>
            <div className='dashboard-Left col-md-3'>
              <ProfileCard/>
              <Trends
              apiUrl={this.props.apiUrl}
              />
            </div>
            <div className='dashboard-Center col-md-6'>
              <TweetForm/>
              <TweetFeed
              apiUrl={this.props.apiUrl}
              />
            </div>
             <div className='dashboard-Right col-md-3'>
              <WhoToFollow/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;