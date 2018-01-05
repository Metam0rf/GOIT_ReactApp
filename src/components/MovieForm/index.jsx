import React from 'react';
import StyledSubmitButton from 'components/Button/styledComponents/styledSubmitBttn';
import './styles.css';

class MovieForm extends React.Component {

    render() {
        return (
            <form className="MovieForm" action="#">
                <label className="MovieForm__label">
                    Title
                    <input className="MovieForm__input" type="text"/>
                </label>
                <label className="MovieForm__label">
                    Description
                    <textarea className="MovieForm__textarea" rows="10"></textarea>
                </label>
                <label className="MovieForm__label">
                    <select className="MovieForm__input">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <StyledSubmitButton className="MovieForm__submit">submit</StyledSubmitButton>
            </form>
        );
    }
}

export default MovieForm;