
import Header from './Component/Header/Header'
import Signup from './Component/Signup/Signup'
import Form from './Component/Form/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import Login from './Component/Login/Login'
import Land from './Component/Soilland/Land'
import Home from './Component/Homepage/Home'
import Own from './Component/Card/Ownloand/OwnLand'
import Else from './Component/Card/ElseLand/ElseLand'
import View from './Component/view/view'
import Profile from './Component/Icon/Profile'
import Error from './Component/Error/Error'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
       <NotificationContainer/>
   <Header />
{/*  <Signup /> */}
{/* <Form /> */}
{/* <Profile /> */}
{/* <Home /> */}
<Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/land" component={Land} />
          <Route exact path="/ownland" component={Own} />
          <Route exact path="/elseland" component={Else} />
          <Route exact path="/userview" component={View} />
          <Route component={Error} />
          
         
          
        </Switch>
    </div>
  );
}

export default App;
