import React from "react";
import Editpost from "../componets/Editpost";
import {connect} from "react-redux";
import { fetchposts } from "../../statemanager/actions/postAction";
import {deletePost} from "../../statemanager/actions/deletepostAction";

class Allpost extends React.Component{
    
    
// For reading posts
    componentDidMount(){
        this.props.fetchposts()
    }
//--------end-------------


    state ={
        editModalOpen :false,
        id:''

    }
    openEditModal = (id) =>{
        this.setState({
            editModalOpen :true,
            id

        })
    }

    closeEditModal = () =>{
        this.setState({
            editModalOpen:false,
            id:''
        })
    }

    render(){
        const {posts}  = this.props;
        return(
            <div>
                <h1>All posts</h1> 
                <div>
                    {posts.map(post =>
                    <div key="{post._id}">
                        <p className="bg-primary text-white">
                        {post.PostName} || 
                        {post.Catagory} || 
                        <button 
                        className="btn btn-success"
                        onClick={()=>this.props.deletePost(post._id)}
                        >Remove</button> ||
                        <button 
                        className="btn btn-success"
                        onClick={()=>this.openEditModal(post._id)}
                        >Edit</button>
                        {
                        this.state.id === post._id?
                        <Editpost
                        isOpen={this.state.editModalOpen}
                        close={this.closeEditModal}
                        post = {post} 
                        />:null
                        }
                        </p> 
                    </div>
                    
                    )};
                </div>
              
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.posts.items
    
  });

export default connect(mapStateToProps,{fetchposts,deletePost}) (Allpost);