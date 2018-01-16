import React from 'react'
import FilmsContainer from 'components/FilmsContainer';
import SideBar from 'components/SideBar';
import {getFilmsData} from 'filmsAPIController';
import './styles.css';

export default class Body extends React.Component {

    constructor(){
        super();

        this.state = {
            watchList: []
        };
        this.filmsContainer = null;
    }

    removeFilmFromWatchlist(film) {
        const idOfRemovedFilm = film.id;
        this.setState({
            watchList: this.state.watchList.filter((film) => film.id !== idOfRemovedFilm)
        });
    }

    addFilmToWatchlist(film){

        if(this.state.watchList.includes(film)) {
            return;
        }

        this.setState(
            {
                watchList: this.state.watchList.concat([film])
            }
        );
    }

    updateFilms(requestURL){
        const updateFilmsContainerState = (data) => {
            this.filmsContainer.setState({films: data});
        };
        getFilmsData(requestURL).then(updateFilmsContainerState);
    }

    render() {
        return (
            <main className="App__Body">
                <SideBar onDetachFilmFromWatchList={this.removeFilmFromWatchlist.bind(this)} updateFilms={this.updateFilms.bind(this)} filmsInWatchList={this.state.watchList.map(film => film)}/>
                <FilmsContainer addToWatchList={this.addFilmToWatchlist.bind(this)} ref={FilmsContainer => this.filmsContainer = FilmsContainer} />
            </main>
        )
    }
}