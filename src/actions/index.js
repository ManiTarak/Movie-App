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