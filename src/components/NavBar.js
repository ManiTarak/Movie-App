import React from 'react';
import {connect} from 'react-redux';
import {data} from '../data';
import {handleMovieSearch,ADDtoMoviesAction} from '../actions';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchText:''
        };
    }
    handleSearch=()=>{
    const {searchText}=this.state;
    this.props.dispatch(handleMovieSearch(searchText));
    }
    handleInputChange=(e)=>{
    this.setState({
        searchText:e.target.value
    });
    }
    handleAddToMovies=(results)=>{
        this.props.dispatch(ADDtoMoviesAction(results));
    }
    render(){
        const {showSearchResults}=this.props.search;
        const {results}=this.props.search;
        return (
            <div className="nav">
                <div className='search-container'>
                    <input onChange={this.handleInputChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResults && 
                    <div className='search-results'>
                        <div className='search-result'>
                            <img src={results.Poster} alt="Search-pic" />
                            <div className='movie-info'>
                                <span>{results.Title}</span>
                                <button onClick={()=>{this.handleAddToMovies(results)}}>Add To Movies</button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}
function mapStatetoProps(state){
    return({
     search:state.search
    });
}
const ConnectNavBarComponent=connect(mapStatetoProps)(NavBar);
export default ConnectNavBarComponent;