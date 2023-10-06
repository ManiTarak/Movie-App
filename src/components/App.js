import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import {AddingmoviesAction, onTabClickactioncreator} from '../actions/index';

class App extends React.Component {
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      this.forceUpdate();
    }
    );
    store.dispatch(AddingmoviesAction());
  }
  isFavourite=(movie)=>{
    const {store}=this.props;
    if(store.getState().movies.FavmovList.indexOf(movie)!=-1){
      return true;
    }
    return false;
  }
  onTabclick=(val)=>{
    const {store}=this.props;
    store.dispatch(onTabClickactioncreator(val));
    
  }
  render(){
    const {movieslist,FavmovList,onFavouritesTab}=this.props.store.getState().movies;
    const displaylist=onFavouritesTab?FavmovList:movieslist
    return (
    <div className="App">
      <NavBar dispatch={this.props.store.dispatch}/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${onFavouritesTab?'':'active-tabs'}`} onClick={()=>this.onTabclick(false)}>Movies</div>
          <div className={`tab ${onFavouritesTab?'active-tabs':''}`} onClick={()=>this.onTabclick(true)}>Favourites</div>
        </div>
          <div className="list">
            {displaylist.map((movie,index) => (
              
              <MovieCard movie={movie} store={this.props.store} isFavourite={this.isFavourite(movie)} key={`movies-${index}`}/>
            ))}
          </div>
          {displaylist.length==0?<h3>Not a movie selected as Favourite</h3>:null}
        </div>
      </div>
  );
  }
}

export default App;
