import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function AddMovie(){

    const [movieToAdd, setMovieToAdd] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    function handleAddMovie(event){
        
    };

    function handleSetTitle(event){

    };

    function handleSetPoster(event){

    };

    function handleSetDescription(event){

    }

    function handleSetGenre(event){

    }

    function cancelAddMovie(){
        history.push('/');
        setMovieToAdd({});
    };
    
    function saveMovie(){
        
    }

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
                <button onClick={saveMovie}>Save</button>
            </form>
        </div>
    );
};

export default AddMovie;