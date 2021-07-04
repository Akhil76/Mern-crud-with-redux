import {POST_FETCH} from '../constants/actionType';

const initialState ={
    items:[]
}

 const postReducer = (state=initialState,action)=>{
     switch(action.type){
         case POST_FETCH:
             return{
                ...state,
                items: action.payload.posts
             }
         default: 
            return state
     }
 };
  
    

export default postReducer;