import Navbar from './Navbar'
import Home from './Home'
import LoginForm from './Loginform'
import Registerform from './Registerform'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './Auth'
function App() {

  //null => anybody acctoken = 10 
    //true => login user acctoken = 1 option 1
    //false => non login user acctoken = 0 option = 0 




  return (
    <Router>
    <div className="App">
      <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Auth(Home, null)} />
            <Route exact path="/login" component={Auth(LoginForm, false)} /> 
            <Route exact path="/register" component={Auth(Registerform, false)} /> 
            <Route exact path="*" component={Auth(NotFound, true)} /> 

          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;