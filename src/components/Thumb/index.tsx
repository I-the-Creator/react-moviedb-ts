import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//Styles
import { Image } from './Thumb.styles';

//Types
type Props = {
    image: string; // it's an URL
    movieId?: number;
    clickable: boolean;
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable}) => (  /* clickable is Boolean - if true we can click the poster and open the movie page */
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>  {/* link to movie page by movieId, get it from the fetch request */}
                <Image src={image} alt='movie-thumb' />
            </Link>
        ) : (   /*  otherwise just show the poster */
            <Image src={image} alt='movie-thumb' />
        )}
    </div>
);

export default Thumb;