import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function AddMovie(){

    const [movieToAdd, setMovieToAdd] = useState({title: '', description: '', poster: '', genre: ''});
    const dispatch = useDispatch();
    const history = useHistory();

    function handleAddMovie(event){
        console.log(movieToAdd);
        dispatch({
            type: 'ADD_MOVIE',
            payload: movieToAdd
        });
    };

    function handleSetTitle(event){
        setMovieToAdd({title: event.target.value});
    };

    function handleSetPoster(event){
        setMovieToAdd({poster: event.target.value});
    };

    function handleSetDescription(event){
        setMovieToAdd({description: event.target.value});
    };

    function handleSetGenre(event){
        setMovieToAdd({genre: event.target.value});
    };

    function cancelAddMovie(){
        history.push('/');
        setMovieToAdd({});
    };

    return(
        <div>
            <form onSubmit={handleAddMovie}>
                <input value={movieToAdd.title} onChange={handleSetTitle} />
                <input value={movieToAdd.poster} onChange={handleSetPoster} />
                <textarea value={movieToAdd.description} onChange={handleSetDescription} />
                <select>
                    {/* Map through genreState here */}
                </select>
                <button onClick={cancelAddMovie}>Cancel</button>
                <button>Save</button>
            </form>
        </div>
    );
};

export default AddMovie;