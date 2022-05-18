import Topbar from "../Topbar";
import Sidebar from "../Sidebar";
import Home from "../Home";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { Switch,Route } from 'react-router-dom';
import Profile from "./Profile";
import Analytics from "./Analytics";
import Manage from "./Manage";

const useStyles = makeStyles((theme) =>({
    container : {
      display: 'flex',
      marginTop: '10px'
    }
  
  }));
function Dashboard() {
    const classes = useStyles();
  return (
    <div>
       <Topbar/> 
        <div className={classes.container}>
            <Sidebar/>
            <Home/>
        </div>
        <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/analytics">
              <Analytics />
            </Route>
            <Route exact path="/manage">
              <Manage />
            </Route>
          </Switch>
    </div>
  )
}

export default Dashboard
