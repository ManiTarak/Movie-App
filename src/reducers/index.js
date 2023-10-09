import { combineReducers } from 'redux';
import { ADD_MOVIES,ADD_SEARCH_RESULT, ADD_TO_MOVIES} from '../actions/index';
import { ADD_FAVOURITE ,ON_TAB_CLICK,REMOVE_FROM_FAV} from '../actions/index';
//reducer functions are pure functions
const InitialmoviesState = {
    movieslist:[],
    FavmovList:[],
    onFavouritesTab:false
}
export  function movies(state = InitialmoviesState, action){
    if(action.type===ADD_MOVIES){
       return ({...state, movieslist:action.movies});
    }else if(action.type===ADD_FAVOURITE){
        return({...state, FavmovList:[action.Favmovie,...state.FavmovList]})
    }else if(action.type===ON_TAB_CLICK){
        return({...state,onFavouritesTab:action.val})
    }else if(action.type===REMOVE_FROM_FAV){
        const fav=state.FavmovList.filter((m)=>(m!=action.UnFavmovie));
        return({...state,FavmovList:fav});
    }else if(action.type===ADD_TO_MOVIES){
        return({...state,movieslist:[action.result,...state.movieslist]});
    }

    return state;
}
const InitialSearchState={
    results:{},
    showSearchResults:false
}
export function search(state=InitialSearchState,action){
    if(action.type===ADD_SEARCH_RESULT){
        return {
            ...state,results:action.movie,
            showSearchResults:true
        
        }
    }else if(action.type===ADD_TO_MOVIES){
        return {
          ...state,showSearchResults:false
        }
    }
    return state;
}
const InitialState={
    movies:InitialmoviesState,
    search:InitialSearchState
}
// export default function rootreducer(state=InitialState,action){
//   return ({
//     movies:movies(state.movies,action),
//     search:search(state.search,action)
//   });
// }
export default combineReducers({
   movies:movies,
   search:search
  });