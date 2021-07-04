import React from "react";
import {connect} from "react-redux";
import {addpost} from "../../statemanager/actions/createpostAction";

class CreatePost extends React.Component{
    
    state = {
        PostName:'',
        Catagory:'',
        PostContent:'',
        //error:{}

    };

    changeHandler = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    };

    submitHandler = event=>{
        event.preventDefault()
        //const {PostName,Catagory,PostContent} = this.state
        this.props.addpost(this.state)
        this.setState({
            PostName:'',
            Catagory:'',
            PostContent:''
        })
       // alert(`${PostName} ${Catagory} ${PostContent}`)
      
    }



    render(){
        const {PostName,Catagory,PostContent,/*error*/} = this.state
        return(
            <div>
                <div className="bg-danger text-white">
                    <h1>{this.state.PostName}</h1>
                    <h3>{this.state.Catagory}</h3>
                    <p>{this.state.PostContent}</p>
                </div>
                <div>
                    <h1>{this.props.PostName}</h1>

                </div>
                <h1>Create a new Post</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="PostName">PostName: </label>    
                        <input 
                        className=""
                        type="text"
                        placeholder="PostName"
                        name="PostName"
                        id="PostName"
                        value={PostName}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Catagory">Catagory: </label>    
                        <input 
                        className=""
                        type="text"
                        placeholder="Catagory"
                        name="Catagory"
                        id="Catagory"
                        value={Catagory}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PostContent">PostContent: </label>    
                        <textarea 
                        className=""
                        type="text"
                        placeholder="PostContent"
                        name="PostContent"
                        id="PostContent"
                        value={PostContent}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">Create Post</button>
                </form>
               
            </div>
        )
    }
}



export default connect(null,{addpost}) (CreatePost);