import React from 'react'
import v4 from 'uuid/v4';
import FilmsContainer from 'components/FilmsContainer';
import MovieForm from 'components/MovieForm';
import './styles.css';

export default class Body extends React.Component {

    render() {
        return (
            <main className="App__Body">
                <FilmsContainer ref={(FilmsContainer) => this._filmsContainer = FilmsContainer}/>
                <MovieForm addFilm={this._addNewFilm.bind(this)} />
            </main>
        )
    }

    _addNewFilm(film){
        const _film = Object.assign(film, {id: v4()});

        this._filmsContainer.setState(
            {
                films: this._filmsContainer.state.films.concat([_film])
            }
        );
    }
}