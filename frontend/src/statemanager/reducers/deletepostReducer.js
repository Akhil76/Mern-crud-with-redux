import { POST_DELETE } from "../constants/actionType";


const deletepostReducer = (posts=[],action) =>{
    switch (action.type) {
        case POST_DELETE:
          return posts.map((c)=>
          c._id===action.payload._id? action.payload : c
          );
    
        default:
         return posts  
    }
} 

export default deletepostReducer;