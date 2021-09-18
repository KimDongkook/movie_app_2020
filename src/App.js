import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  setLoading = () => {
    this.setState(current => ({
      isLoading: current.isLoading = !current.isLoading
    }))
  }

  getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState(() => ({
      isLoading: false, movies
    }))
  }

  componentDidMount() {
    // load movie data
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
        <div className="loader">
          <span className="loader__text"> Loading...</span>
        </div>
        ) : (
          <div className="movies">
            {
              movies.map(({id, year, title, summary, genres, medium_cover_image: poster}) => {
                return <Movie key={id} year={year} title={title} summary={summary} genres={genres} poster={poster} />
              })
            }
          </div>
        )}
      </section>
    );
  }
}

export default App;
