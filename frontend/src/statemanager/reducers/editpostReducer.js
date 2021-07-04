import { POST_UPDATE } from "../constants/actionType";


const editpostReducer = (posts=[],action) =>{
    switch (action.type) {
        case POST_UPDATE:
          return posts.map((c)=>
          c._id===action.payload._id? action.payload : c
          );
    
        default:
         return posts  
    }
} 

export default editpostReducer;