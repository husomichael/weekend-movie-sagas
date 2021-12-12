import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    function goToAddMovie(){
        history.push('/addmovie')
    };

    function goToDetails(event){
        console.log('goToDetails event.target.id:', event.target.id)
        history.push('/details');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div onClick={goToDetails} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} id={movie.id} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
            <button onClick={goToAddMovie}>Add a Movie</button>
        </main>
    );
}

export default MovieList;