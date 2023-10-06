import React from 'react';
import {data} from '../data';
import {handleMovieSearch} from '../actions';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showSearchResults:true,
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
    render(){
        const {showSearchResults}=this.state;
        return (
            <div className="nav">
                <div className='search-container'>
                    <input onChange={this.handleInputChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResults && 
                    <div className='search-results'>
                        <div className='search-result'>
                            <img src={data[0].Poster} alt="Search-pic" />
                            <div className='movie-info'>
                                <span>{data[0].Title}</span>
                                <button >Add To Movies</button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}

export default NavBar;