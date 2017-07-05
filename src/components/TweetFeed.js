import React from 'react';
import axios from 'axios';
import {flatten} from 'underscore';

import Tweet from './Tweet';



class TweetFeed extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tweets: []
        }
    }
    componentDidMount () {
        axios.get(`${this.props.apiUrl}/tweets`)
        .then((res) => {
            this.setState({
                tweets: flatten(res.data.tweets)
            })
        })
        .catch(console.log)
    }
    render() {
        return (
            <div className="component-TweetFeed panel panel-default">
                <div className="panel-heading">
                    <h5 className='title'>Tweet Feed</h5>
                </div>
                <div className="panel-body">
                    {/*{   this.state.tweets.length === 0
                    ? <p>Loading...</p> 
                    : */}
                    {this.state.tweets.map((tweet, i) => (
                        <Tweet
                        key={i}
                        name={tweet.user.name}
                        handle={tweet.user.screen_name}
                        body={tweet.text}
                        avatarUrl={tweet.user.profile_image_url}
                        />
                    ))}
                </div>
                
            </div>
        )
    }
}
export default TweetFeed;