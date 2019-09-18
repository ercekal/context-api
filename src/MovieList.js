import React, {useContext} from 'react';
import Movie from './Movie'
import {MovieContext } from './MovieContext'

const MovieList = () => {
	const [movies, setMovies] = useContext(MovieContext)

	return (
		<div>
			{movies.map(m => (
				<Movie name={m.name} price={m.price} id={m.id} />
			))}
		</div>
	);
};

export default MovieList;