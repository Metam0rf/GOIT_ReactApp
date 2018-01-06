import React from 'react';
import './styles.css';

class ChipsList extends React.Component{

    render(){
        return (
            <ul className="ChipsList">
                {this.props.chips.map(chip => <li className="ChipsList__item">{chip}</li>)}
            </ul>
        );
    };
}

export default ChipsList;