import React, {useState, createContext} from 'react';

export const MovieContext = createContext()

export const MovieProvider = props => {
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: '$10',
			id: 21331
		},
		{
			name: 'GoT',
			price: '$20',
			id: 98556
		},
		{
			name: 'superman',
			price: '$15',
			id: 134
		}
	])
	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	)
};
