import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function AddMovie(){

    const [movieToAdd, setMovieToAdd] = useState({title: '', description: '', poster: '', genre: ''});
    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('Genres:', genres);

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
        setMovieToAdd({title: '', description: '', poster: '', genre: ''});
    };

    return(
        <div>
            <form onSubmit={handleAddMovie}>
                <input placeholder="Title" value={movieToAdd.title} onChange={handleSetTitle} />
                <input placeholder="Poster URL" value={movieToAdd.poster} onChange={handleSetPoster} />
                <textarea placeholder="Description" value={movieToAdd.description} onChange={handleSetDescription} />
                <select value={movieToAdd.genre} onChange={handleSetGenre}>
                    <option disabled value='0'>
                        Select a Genre!
                    </option>
                    {genres.map(genre => {
                        return <option key={genre.id} value={genre.id}>{genre.name}</option>
                    })}
                </select>
                <button>Save</button>
            </form>
            <button onClick={cancelAddMovie}>Cancel</button>
        </div>
    );
};

export default AddMovie;