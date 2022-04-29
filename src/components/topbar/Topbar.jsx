import React from 'react'
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
import {Menu,MenuItem,IconButton,Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        display: 'block',
        margin: 'auto',
        width: '100%',
        height: '50px',
        position: 'sticky',
        top: '0',
        zIndex: '999',
        backgroundColor: '#FFFFFF',  

        

      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      Avatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        cursor: 'pointer'
      },
      topbarWrapper : {
        height: '100%',
        padding: '0px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      logo : {
        fontWeigth : 'bold',
        fontSize: '30px',
        color: 'rgb(4, 4, 71)',
        cursor: 'pointer'
      },
      topRight :{
        display: 'flex',
        alignItems: 'center'
    
      },
      topbarIconContainer : {
        position: 'relative',
        cursor: 'pointer',
        marginRight: '10px',
        color: '#555 '
      },
      topIconBadge : {
        width: '15px',
        height: '15px',
        position: 'absolute',
        top: '-5px',
        right: '0px',
        backgroundColor: 'rgb(255, 0, 0)',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
      },
      topAvatar: {
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        cursor: 'pointer'
     }

}));
export default function Topbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/";
      };

  return (
    <div className={classes.root}>
        <div className={classes.topbarWrapper}>
        <div className="topLeft">
            <span className={classes.logo}>Hescass</span>
        </div>
        <div className={classes.topRight}>
        <div className={classes.topbarIconContainer}>
                <NotificationsNone/>
                <span className={classes.topIconBadge}>2</span>

            </div>
            <div className={classes.topbarIconContainer}>
                <Language/>
            

            </div>
            <div className={classes.topbarIconContainer}>
                <Settings/>
             

            </div>
            <div>
            <IconButton onClick={handleMenu} color="inherit">
              <Avatar>
              <img src="/image/avatar1.jpg" alt="" className={classes.Avatar} />
              </Avatar>
            </IconButton>
            <Menu id="menu-appbar" 
              anchorEl={anchorEl} 
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
           
        </div>
        </div>

    
    </div>
  )
}
