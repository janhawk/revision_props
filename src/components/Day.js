import React from 'react';
import PropTypes from 'prop-types';

class Day extends React.Component {
    render() {

        return(
            <div className="box col-6 col-md-3">
                <h2>{this.props.dayName}</h2>
                <h2>{this.props.dayNumber}</h2>
                <p>{this.props.monthName}</p>
            </div>
        );

    }
}
Day.propTypes = {
    dayName: PropTypes.string,
    dayNumber: PropTypes.number,
    monthName: PropTypes.string,
  };
Day.defaultProps = {
    dayName : "Some day",
    dayNumber : -1,
    monthName : "Some month",
  };
  
export default Day;