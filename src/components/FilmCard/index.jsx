import React from 'react';
import PropTypes from 'prop-types';
import StyledDeleteButton from 'components/Button/styledComponents/styledDeleteBttn';
import ChipsList from 'components/ChipsList';
import './styles.css'

export default class FilmCard extends React.Component {
    constructor(props){
        super(props);

        this.title = props.title;
        this.description = `${props.description.substring(0, 250)}...`;
        this.rating = props.userRating || props.rating;
        this.tags = props.tags;
        this.id = props.id;
    }

    render() {
        return (
            <article className="FilmCard">
                <h2 className="FilmCard__header">{this.title}</h2>
                <p className="FilmCard__body">{this.description}</p>
                <StyledDeleteButton className="FilmCard__delete" onClick={this._handleDelete.bind(this)}>Delete</StyledDeleteButton>
                <p className="FilmCard__rating">{`Rating: ${this.rating}/10`}</p>
                <ChipsList chips={this.tags} />
            </article>
        )
    };

    _handleDelete(event){
        event.preventDefault();
        this.props.onDelete(this.id);
    }
}

FilmCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    onDelete: PropTypes.func.isRequired
};
