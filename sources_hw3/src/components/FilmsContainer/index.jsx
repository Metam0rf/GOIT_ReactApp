import React from 'react';
import FilmCard from 'components/FilmCard';
import {getFilmsData} from 'filmsAPIController';
import PropTypes from 'prop-types';

import './styles.css';

export default class FilmsContainer extends React.Component {

    //life cycles
    constructor(props){
        super(props);
        this.state = {
            films: []
        };
    }

    static propTypes = {
        addToWatchList: PropTypes.func
    };

    componentWillMount(){
        const url = `${process.env.REACT_APP_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_DEFAULT_LANGUAGE}`;
        const updateState = (data) => {
            this.setState({films: data});
        };
        getFilmsData(url).then(updateState);
    }

    //END life cycles

    _getFilmsComponentsList(addToWatchListFunc) {
        let portionCounter = process.env.REACT_APP_FILMS_COUNT || 20;

        let filmsPortionArray = this.state.films.slice(0, portionCounter);

        if (filmsPortionArray.length === 0) {
            return <h2>По вашему запросу ничего не найдено! ¯\_(ツ)_/¯</h2>;
        }

        return filmsPortionArray.map((film) =>
            (<div key={film.id} className="FilmsContainer__item">
                <FilmCard film={film} addToWatchList={addToWatchListFunc}/>
            </div>)
        );
    };

    render({addToWatchList} = this.props) {
        return (
            <div className="FilmsContainer">
                {this._getFilmsComponentsList(addToWatchList)}
            </div>
        );
    }

}
