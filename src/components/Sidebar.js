import React from 'react'
import { Link} from 'react-router-dom';
import {
  LineStyle,
  Timeline,
  WorkOutlineOutlined,

 
} from "@material-ui/icons"


import "../style/sidebar.css"
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';




const useStyles = makeStyles((theme) =>({
  sidebar : {
    flex:' 1',
    height: '100vh',
    backgroundColor:'rgb(251, 251, 255)',
    position: 'sticky',
    top:' 50px'
}

}));

export default function Sidebar() {
  const classes = useStyles();
  
  return (
    
    <Container className={classes.sidebar}>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">
              Dashboard
            </h3>
            <ui className="sidebarList">
              <li className="sidebarListItem active" >
                <LineStyle className='sidebarIcon'  />
                <Link to="/profile">Profile</Link>
              </li>
              <li className="sidebarListItem">
                <Timeline className='sidebarIcon'/>
                <Link to="/analytics">Analytics</Link>
                
              </li>

            </ui>

          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ui className="sidebarList">
              <li className="sidebarListItem active">
                <WorkOutlineOutlined className='sidebarIcon'/>
                <Link to="/manage">Manage</Link>
              </li>

            </ui>

          </div>
        </div>
    </Container>
    
  )
}

