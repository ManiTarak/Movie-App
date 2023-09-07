import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import {AddingmoviesAction} from '../actions/index';

class App extends React.Component {
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      this.forceUpdate();
    }
    );
    store.dispatch(AddingmoviesAction());
  }
  render(){
    const movies=this.props.store.getState();
    return (
    <div className="App">
      <NavBar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
          <div className="list">
            {movies.map((movie,index) => (
              
              <MovieCard movie={movie} key={`movies-${index}`}/>
            ))}
          </div>
        </div>
      </div>
  );
  }
}

export default App;
