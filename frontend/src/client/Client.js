import React from "react";
import {connect} from "react-redux";
import { fetchposts } from "../statemanager/actions/postAction";

class Client extends React.Component{
    
    componentDidMount(){
        this.props.fetchposts()
    }

    render(){
        const {posts}  = this.props;
        return(
            <div className="container">
                <h1 className="bg-success text-light">Blogsite</h1>
                
                    {posts.map(post =>

                   // {post.PostName}{post.Catagory} {post.PostContent}

                    <div className="bg-secondary text-white">
                        <h1>{post.PostName}</h1>
                        <h3>{post.Catagory}</h3>
                        <p>{post.PostContent}</p>
                    </div>

                    )}
                
            </div>
         );
}
    
};
   
const mapStateToProps = state => ({
    posts: state.posts.items
    
  });

export default connect(mapStateToProps,{fetchposts}) (Client);