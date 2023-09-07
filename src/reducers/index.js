import { ADD_MOVIES } from '../actions/index';
//reducer functions are pure functions
const InitialState = {
    movieslist:[],
    FavmovList:[]
}
export default function movies(state = InitialState, action){
    if(action.type===ADD_MOVIES){
       return ({...state, movieslist:action.movies});
    }
    return state;
}