import { ADD_MOVIES } from '../actions/index';
//reducer functions are pure functions
export default function movies(state = [], action){
    if(action.type==ADD_MOVIES){
        return action.movies;
    }
    return state;
}