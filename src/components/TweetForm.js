import React from 'react';

class TweetForm extends React.Component {
    render() {
        return (
            <div className="component-TweetForm panel panel-default">
                <form className='tweet-Form'>
                    <input className='tweet-Input' type='text'/>
                </form>
                <button className='tweet-Button'>Tweet</button>
            </div>
        )
    }
}

export default TweetForm;