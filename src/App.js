import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./page/home/Home";
import Signin from "./page/signin/Signin";
// import Login from "./page/login/Login";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  container : {
    display: 'flex',
    marginTop: '10px'
  }

}));

function App() { 
  const classes = useStyles();
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }
  return ( 
    <div>
      {/* <main className="App">
        <Login/>
      </main> */}
      <Topbar/> 

      <div className={classes.container}>
        <Sidebar/>
        <Home/>
      </div>

    </div>
  );
 
}

export default App;
