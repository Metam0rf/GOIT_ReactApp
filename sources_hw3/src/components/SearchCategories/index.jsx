import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchCategories = (props) => {

    const updateFilms = props.updateFilms;

    const onClickHandle = (event) => {
        event.preventDefault();

        const categoryText = event.target.getAttribute("queryparam");
        if(categoryText === ""){
            return;
        }
        const url = `${process.env.REACT_APP_URL}/movie/${categoryText}?api_key=${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_DEFAULT_LANGUAGE}`;

        updateFilms(url);
    };

    const childrenWithExtraProp = React.Children.map(props.children, child => {
        return React.cloneElement(child, {className: "SearchCategories__btn"});
    });

    return (
        <div className="SearchCategories" onClick={onClickHandle}>
            {childrenWithExtraProp}
        </div>
    );

};

SearchCategories.propTypes = {
    updateFilms: PropTypes.func.isRequired,
};

export default SearchCategories;