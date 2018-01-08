import React from 'react';
import PropTypes from 'prop-types';
import {genres} from 'filmsDataMock'
import StyledSubmitButton from 'components/Button/styledComponents/styledSubmitBttn';
import './styles.css';

class MovieForm extends React.Component {

    constructor(props){
        super(props);
        this.genreInputs = [];
    }

    render() {
        return (
            <form className="MovieForm" action="#">
                <label className="MovieForm__label">
                    Title
                    <input className="MovieForm__input" type="text" ref={(input) => this._title = input} />
                </label>
                <label className="MovieForm__label">
                    Description
                    <textarea className="MovieForm__textarea" rows="10" ref={(textarea) => this._description = textarea} ></textarea>
                </label>
                <label className="MovieForm__label">
                    <select id="ratingSelection" className="MovieForm__input" ref={(select) => this._rating = select} >
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
                <div className="MovieForm__genres">
                    {this._getGenresHTML()}
                </div>
                <StyledSubmitButton className="MovieForm__submit" onClick={this._handleSubmit.bind(this)}>submit</StyledSubmitButton>
            </form>
        );
    }

    _getGenresHTML(){
        return genres.map(genre => {
            return (<label key={genre}>
                <input type="checkbox" ref={input => this.genreInputs.push(input)} value={genre} />
                {genre}
            </label>)
        });
    }

    _handleSubmit(event) {
        event.preventDefault();

        if (this._title.value.trim() === "" || this._description.value.trim() === "") {
            alert("Поля заголовка или описания фильма не заполнены!");
            return;
        }
        ;

        const selectedOption = this._rating.selectedIndex;
        const rating = parseInt(document.getElementById("ratingSelection").options[selectedOption].value, 10);

        let tags = [];
        this.genreInputs.forEach((input) => {
            if (input.checked) {
                tags.push(input.value.trim());
            }
        });

        let film = {
            title: this._title.value,
            description: this._description.value,
            rating: rating,
            tags: tags
        };
        this.props.addFilm(film);

        //Обнулим значения формы
        this._rating.selectedIndex = 0;
        this._title.value = "";
        this._description.value = "";
        this.genreInputs.forEach((input) => input.checked = false);
    }
}

MovieForm.propTypes = {
    addFilm: PropTypes.func.isRequired
};

export default MovieForm;