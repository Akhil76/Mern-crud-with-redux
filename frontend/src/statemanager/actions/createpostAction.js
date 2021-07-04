import Axios from 'axios';
import {POST_CREATE} from '../constants/actionType';


export const addpost = newpost => dispatch => {
    Axios.post('/post',newpost)
    .then(Response =>{
        dispatch(
            {type:POST_CREATE,
            payload:{newpost:Response.data}
                }
            )
    })
    .catch(error =>{
        console.log(error)
    })
}