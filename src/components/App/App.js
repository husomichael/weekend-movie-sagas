import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {useHistory} from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx';

function App() {

  const history = useHistory();

  function goToAddMovie(){
    history.push('/addmovie');
  };

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
        {/* <Route exact path="/addmovie"> */}
          <AddMovie />
        {/* </Route> */}
      </Router>
      <button onClick={goToAddMovie}>Add a Movie</button>
    </div>
  );
};


export default App;
