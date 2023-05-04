import React from 'react';
import './filmIconStyle.css';

const FilmIcon = ({cover, title, rating, genres, key}) => {

    return (
        <div className='filmIcon' key={key}>
            <div className="rating">{rating}</div>
            <div className="cover">
                <div className="movie-cover">
                    <img src={cover} alt={title}/>
                </div>
            </div>
            <div className="info">
                <div className="title">{title}</div>
                <div className="genres">{genres.map((genre) => genre['genre'] + ' ')}</div>
            </div>
        </div>
    );
};

export default FilmIcon;