import React from "react";
import Modal from "react-modal";
import {connect} from "react-redux";
import {editPost} from "../../statemanager/actions/editpostAction";

const customStyles = {

    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: '500px'
    },
  };




class Editpost extends React.Component{

    state = {
        PostName:'',
        Catagory:'',
        PostContent:'',
    };

componentDidMount(){
        this.setState({
            PostName:this.props.post.PostName,
            Catagory:this.props.post.Catagory,
            PostContent:this.props.post.PostContent
        })
    }



    changeHandler = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    };

    submitHandler = event=>{
        event.preventDefault()
        this.props.editPost(this.props.post._id,this.state)
        this.props.close()
        
        
    }


    render(){
        const {PostName,Catagory,PostContent} = this.state
        return(
           <Modal
           style={customStyles} 
           isOpen={this.props.isOpen}
           onRequestClose={this.props.close}
           >
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
                    <button className="btn btn-primary" type="submit">Edit Post</button>
                   
                </form>
           </Modal>
        )
    }
}

export default connect(null,{editPost}) (Editpost);