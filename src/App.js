import Signin from './components/Signin';
// import Login from "./page/login/Login";
import { BrowserRouter ,Route,Switch,Redirect} from 'react-router-dom';
import Dashboard from './components/sidebar/Dashboard';

const NotFound = () => <div>NotFound page</div>

function App() { 
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }
  return ( 
      <BrowserRouter>
          <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
            <Route  path="/">
            <Redirect to="/dashboard"></Redirect>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
      </BrowserRouter>
      
      
  );
 
}

export default App;
