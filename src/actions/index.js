// {
//     type:"ADD_MOVIES";
//     movies:[]
// }
// {
//     type:"Delete_Movie"
// }
import { data } from '../data';

export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVOURITE="ADD_FAVOURITE";
export const ON_TAB_CLICK="ON_TAB_CLICK";
export const REMOVE_FROM_FAV="REMOVE_FROM_FAV";
export function AddingmoviesAction(){
    return({
      type:ADD_MOVIES,
      movies:data
    });
}
export function AddingmoviestoFavourite(movie){
    return({
        type:ADD_FAVOURITE,
        Favmovie:movie
    })
}
export function onTabClickactioncreator(val){
    return({
        type:ON_TAB_CLICK,
        val:val
    })
}
export function RemovemoviefromFavourites(movie){
    return({
        type:REMOVE_FROM_FAV,
        UnFavmovie:movie
    })
}
export function handleMovieSearch(movie){
    const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function(dispatch){
    fetch(url)
    .then(response=>response.json())
    .then(movie=>console.log(movie));
    }
}