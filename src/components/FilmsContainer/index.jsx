import React from 'react';
import FilmCard from 'components/FilmCard';
import FilmsDataBase from 'filmsDataMock';

import './styles.css';

const FilmsContainer = () => {

        const films = FilmsDataBase.map((film) => <FilmCard key={film.id} {...film} />);

        return (
            <div className="FilmsContainer">
                {films}
            </div>
        );
};

export default FilmsContainer;
