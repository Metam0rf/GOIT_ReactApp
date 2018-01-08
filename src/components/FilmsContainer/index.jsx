import React from 'react';
import FilmCard from 'components/FilmCard';
import  {films as FilmsDataBase} from 'filmsDataMock';

import './styles.css';

class FilmsContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            films: []
        };
    }

    componentWillMount(){
        this.setState({
            films: this._getFilmsList()
        });
    }

    render() {
        return (
            <div className="FilmsContainer">
                {this._getFilmsComponentsList()}
            </div>
        );
    }

    _getFilmsList(){
        return FilmsDataBase.map((film) => ({...film}) );
    }

    _getFilmsComponentsList(){
        return this.state.films.map((film) => <FilmCard key={film.id} {...film} onDelete={this._removeFilmFromList.bind(this)} />);
    }

    _removeFilmFromList(id) {
        this.setState({
            films: this.state.films.filter((film) => film.id !== id)
        });
    }

}

export default FilmsContainer;
