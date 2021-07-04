import Axios from 'axios';
import {POST_FETCH} from '../constants/actionType';


export const fetchposts = () =>(dispatch)=>{
   
    Axios.get('/get')
    .then(response =>{
        dispatch({
            type:POST_FETCH,
            payload: {
                posts: response.data
            }
        })
    })
    .catch(error =>{
        console.log(error)
    })
}