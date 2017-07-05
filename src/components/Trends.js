import React from 'react';
import Trend from './Trend';
import axios from 'axios';

class Trends extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        trends: []
    };
}

componentDidMount(){
    axios.get(`${this.props.apiUrl}/trends`)
    .then((res)=> {
        this.setState({
            trends: res.data.trends
        });
    })
    .catch(console.log);
}

    render() {
        return (
            <div className="component-Trends panel panel-default">
                <div className="panel-heading">
                    <h4>Trends</h4>
                </div>
                <div className="panel-body">
                    {this.state.trends.map((trend, i) => (
                        <Trend 
                        key={i}
                        name={trend.name}
                        url={trend.url}
                        tweetVol={trend.tweet_volume}
                        />
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default Trends;