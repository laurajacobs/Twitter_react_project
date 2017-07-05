import React from 'react';
import PropTypes from 'prop-types';

const Trend = (props) => (
    <div className="component-Trend panel panel-default">
        <div className="panel-body">
           <a href={props.url}>{props.name}</a>
           <p>{props.tweetVol}</p>
        </div>
    </div>

);

export default Trend;

Trend.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tweetVol: PropTypes.number
};