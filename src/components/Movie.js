import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Movie.css'

function Movie({year, title, summary, genres, poster}) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: './movie-detail',
                    state: {year, title, summary, poster, genres}
                }}
                >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {
                            genres.map((genre, idx) => {
                                return <li key={idx} className="movie__genre">{genre}</li>;
                            })
                        }
                    </ul>
                    <p className="movie__summary">{summary.length > 180 ? summary.slice(0,180) + '...' : summary}</p>
                </div>
            </Link>
        </div>
        
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;