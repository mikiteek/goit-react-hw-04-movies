import React, {Component} from "react";
import styles from "./MovieDetails.module.css";

class MovieDetails extends Component {

  render() {
    const {id, title, overview, poster_path: poster, vote_average: score, release_date, genres} = this.props.movie;
    const release = (new Date(release_date)).getFullYear();
    return (
      <section>
        <div className={styles["movieDetails"]}>
          <div>
            <img className={styles["poster"]} src={poster}/>
          </div>
          <div>
            <h2>{title} ({release})</h2>
            <p>User rating: {score}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={styles["genresList"]}>
              {genres.map(({name, id}) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieDetails;