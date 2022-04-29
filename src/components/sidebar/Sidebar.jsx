import React from 'react'
import {
  LineStyle,
  Timeline,
  PersonOutlineOutlined,
  EmailOutlined,
  StorefrontOutlined,
  DynamicFeedOutlined,
  WorkOutlineOutlined,
 
} from "@material-ui/icons"
import "./sidebar.css"
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
            <h3 className="sidebarTitle">Dashboard</h3>
            <ui className="sidebarList">
              <li className="sidebarListItem active">
                <LineStyle className='sidebarIcon'/>
                Home
              </li>
              <li className="sidebarListItem">
                <Timeline className='sidebarIcon'/>
                Analytics
              </li>

            </ui>

          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ui className="sidebarList">
              <li className="sidebarListItem active">
                <PersonOutlineOutlined className='sidebarIcon'/>
                User
              </li>
              <li className="sidebarListItem">
                <StorefrontOutlined className='sidebarIcon'/>
                Products
              </li>

            </ui>

          </div> <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ui className="sidebarList">
              <li className="sidebarListItem active">
                <EmailOutlined className='sidebarIcon'/>
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeedOutlined className='sidebarIcon'/>
                Feedback
              </li>
            </ui>

          </div> <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ui className="sidebarList">
              <li className="sidebarListItem active">
                <WorkOutlineOutlined className='sidebarIcon'/>
                Manage
              </li>

            </ui>

          </div>
        </div>
    </Container>
  )
}
