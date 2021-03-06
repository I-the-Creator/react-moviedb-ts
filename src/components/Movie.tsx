import React from 'react';
import { useParams } from 'react-router-dom';   // to gard params from the URL

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import BreadCrump from './BreadCrump';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
//Image
import NoImage from '../images/no_image.jpg';

const Movie: React.FC = () => {

    // destructure props from useParam to get movieId from URL
    //  name param as 'movieId' as we named it like this in App.js in Routes
    const { movieId } = useParams();   

    //destructure props exported from the hook
    const { state: movie, loading, error } = useMovieFetch(Number(movieId));

    // console.log(movie);  // json object 

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>;

    return (
      <>
        <BreadCrump movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />{" "}
        {/* sent the prop with movie data to MovieInfo component */}
        <MovieInfoBar
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
        <Grid header="Actors">
          {movie.actors.map((actor) => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          ))}
        </Grid>
      </>
    );
};

export default Movie;