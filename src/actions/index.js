// {
//     type:"ADD_MOVIES";
//     movies:[]
// }
// {
//     type:"Delete_Movie"
// }
import { data } from '../data';

export const ADD_MOVIES="ADD_MOVIES";
export function AddingmoviesAction(){
    return({
      type:ADD_MOVIES,
      movies:data
    });
}
