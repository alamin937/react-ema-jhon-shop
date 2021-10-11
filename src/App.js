import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import AuthProvider from './Context/AuthProvider.js';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
         <Shop></Shop>
       </Route>
       <Route path='/shop'>
         <Shop></Shop>
       </Route>
       <Route path='/order'>
        <Review></Review>
       </Route>
       <Route path='/inventory'>
          <Inventory></Inventory>
       </Route>
       <PrivetRoute path='/placeorder'>
         <PlaceOrder></PlaceOrder>
       </PrivetRoute>
       <Route path='/login'>
          <LogIn></LogIn>
       </Route>
       <Route path='/register'>
          <Register></Register>
       </Route>
       <Route path='*'>
        <NotFound></NotFound>
       </Route>
     </Switch>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
