import Axios from 'axios';
import { POST_DELETE } from '../constants/actionType';

export const deletePost = (id) => async(dispatch) =>{
    Axios.delete(`/delete/${id}`)
    .then(Response=>{
        dispatch({type:POST_DELETE,
            payload:Response.data})
    })
    .catch(error =>{
        console.log(error)
    })
}
