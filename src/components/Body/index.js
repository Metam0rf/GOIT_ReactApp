import React from 'react'
import FilmsContainer from 'components/FilmsContainer';
import MovieForm from 'components/MovieForm';

export default class Body extends React.Component{

    render() {
    return (
        <main className="App__Body">
            <FilmsContainer />
            <MovieForm/>
        </main>
    )
}
}