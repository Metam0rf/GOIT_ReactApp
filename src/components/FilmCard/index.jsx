import React from 'react';
import StyledDeleteButton from 'components/Button/styledComponents/styledDeleteBttn';
import './styles.css'

export default class FilmCard extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.title = props.title;
        this.description = props.description;
    }

    render() {

        return (
            <article className="FilmCard">
                <h2 className="FilmCard__header">{this.title}</h2>
                <p className="FilmCard__body">{this.description}</p>
                <StyledDeleteButton>Delete</StyledDeleteButton>
            </article>
        )
    };
}

// {
//     id: v4(),
//         title: "Star Wars",
//     description: "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), c etc...",
//     userRating: 7,
//     tags: ["sci-fi", "drama", "action"]
// }