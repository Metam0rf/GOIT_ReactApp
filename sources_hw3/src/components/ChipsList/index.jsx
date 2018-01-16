import React from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid/v4';
import './styles.css';

class ChipsList extends React.Component{

    render(){
        if(this.props.chips === undefined){
            return "";
        };

        return (
            <ul className="ChipsList">
                {this.props.chips.map(chip => <li className="ChipsList__item" key={v4()}>{chip}</li>)}
            </ul>
        );
    };
}

ChipsList.propTypes = {
    chips: PropTypes.arrayOf(PropTypes.string)
};

export default ChipsList;