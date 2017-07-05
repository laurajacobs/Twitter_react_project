import React from 'react';

const Tweet = (props) => (
    <div className="component-Tweet panel panel-default">
        <div className="panel-body">
           <img src={props.avatarUrl} alt="avatar-url"/>
           <h4>{props.name}</h4>
           <p>{props.handle}</p>
           <p>{props.body}</p>
        </div>
    </div>

);

export default Tweet;