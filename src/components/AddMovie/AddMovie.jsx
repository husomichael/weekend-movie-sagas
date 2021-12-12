import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function AddMovie(){

    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() =>{
        dispatch({
            type: 'FETCH_GENRES'
        })
    }, []);

    console.log('Genres:', genres);

    function handleAddMovie(event){
        const movieToAdd = {
            title: title,
            poster: poster,
            description: description,
            genre_id: genre
        };
        console.log('movieToAdd:', movieToAdd);
        dispatch({
            type: 'ADD_MOVIE',
            payload: movieToAdd
        });
        history.push('/');
    };

    function handleSetTitle(event){
        setTitle(event.target.value);
    };

    function handleSetPoster(event){
        setPoster(event.target.value);
    };

    function handleSetDescription(event){
        setDescription(event.target.value);
    };

    function handleSetGenre(event){
        console.log(event.target)
        setGenre(event.target.value);
    };

    function cancelAddMovie(){
        history.push('/');
        setTitle('');
        setPoster('');
        setDescription('');
        setGenre('');
    };

    return(
        <div>
            <form onSubmit={handleAddMovie}>
                <input placeholder="Title" value={title} onChange={handleSetTitle} />
                <input placeholder="Poster URL" value={poster} onChange={handleSetPoster} />
                <textarea placeholder="Description" value={description} onChange={handleSetDescription} />
                <select onChange={handleSetGenre}>
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