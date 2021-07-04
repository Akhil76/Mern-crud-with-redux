import axios from 'axios';
import { POST_UPDATE } from '../constants/actionType';

export const editPost = (id,post) => dispatch =>{
   axios.put(`/update/${id}`,post)
    .then(Response=>{
        dispatch({
            type:POST_UPDATE,
            payload:{post:Response.data.post}
        })
    })
    .catch(error =>{
        console.log(error)
    })
}