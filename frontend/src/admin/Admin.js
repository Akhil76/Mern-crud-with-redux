import React from "react";
import CreatePost from "./pages/CreatePost";
import Allpost from "./pages/Allpost";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const Admin = () => {


    return(
        <Router>
        <div className="container">
            <h1 className="bg-dark text-light">AdminPanel</h1>
            
            <Link className="btn btn-success" exact to='/Admin/CreatePost'>CreatePost</Link>
            <Link className="btn btn-success" exact to='/Admin/Allpost'>Allpost</Link>
            <Switch>
                <Route path='/Admin/CreatePost' component={CreatePost}/>
                <Route path='/Admin/Allpost' component={Allpost}/>
            </Switch>       
                    
        </div>
        </Router> 
    );
};
   


export default Admin;