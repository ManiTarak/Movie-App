import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import {AddingmoviesAction, onTabClickactioncreator} from '../actions/index';
import {connect} from 'react-redux';

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(AddingmoviesAction());
  }
  isFavourite=(movie)=>{
    const {movies}=this.props;
    if(movies.FavmovList.indexOf(movie)!=-1){
      return true;
    }
    return false;
  }
  onTabclick=(val)=>{
    
    this.props.dispatch(onTabClickactioncreator(val));
    
  }
  render(){
    const {movieslist,FavmovList,onFavouritesTab}=this.props.movies;
    const displaylist=onFavouritesTab?FavmovList:movieslist
    return (
    <div className="App">
      <NavBar  dispatch={this.props.dispatch}/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${onFavouritesTab?'':'active-tabs'}`} onClick={()=>this.onTabclick(false)}>Movies</div>
          <div className={`tab ${onFavouritesTab?'active-tabs':''}`} onClick={()=>this.onTabclick(true)}>Favourites</div>
        </div>
          <div className="list">
            {displaylist.map((movie,index) => (
              
              <MovieCard movie={movie} dispatch={this.props.dispatch} isFavourite={this.isFavourite(movie)} key={`movies-${index}`}/>
            ))}
          </div>
          {displaylist.length==0?<h3>Not a movie selected as Favourite</h3>:null}
        </div>
      </div>
  );
  }
}
function callback(state){
  return{
    movies:state.movies,
    search:state.search
  }
}
const connectedAppComponent=connect(callback)(App);

export default connectedAppComponent;
