import './App.scss';

import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import YourCart from './components/YourCart/YourCart';
import YourOrders from './components/YourOrders/YourOrders';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

const App = (props) => {
    return (
        <div className="app">
            <header>
                <NavBar />
            </header>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/your-cart" exact component={YourCart} />
                <Route path="/your-orders" exact render={() => {
                    return props.userInfo ?
                        <YourOrders /> :
                        <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                            <NavLink to={{ pathname: '/login' }}>Login</NavLink> to see to your orders!
                        </div>
                }} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps, null)(App);
