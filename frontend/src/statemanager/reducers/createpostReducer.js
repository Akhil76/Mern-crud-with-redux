import {POST_CREATE} from '../constants/actionType';

/*

const initialState = {
    PostName:'',
    Catagory:'',
    PostContent:''
}

*/

const addpostReducer = (state=[],action)=>{
    switch(action.type){
        case POST_CREATE:
            return{
               ...state,
               newpost: action.payload
            }
        default: 
           return state
    }
};
 
   

export default addpostReducer;