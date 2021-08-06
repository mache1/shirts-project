import './NavBar.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';
import Overlay from '../../hoc/Overlay/Overlay';
import Sidebar from '../Siderbar/Siderbar';
import { useState } from 'react';

const NavBar = (props) => {
    const [overlay, setOverlay] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const history = useHistory();
    const { logout } = useAuth();

    async function logoutHandler() {
        await logout();
        history.push('/login');
        props.clearCart();
        props.clearUserInfo();
        props.clearOrderInfo();
    }

    const showSidebarHandler = () => {
        setSidebar(true);
        setOverlay(true);
    }

    const hideSidebar = () => {
        setOverlay(false)
        setSidebar(false)
    }

    return (
        <div className="nav-bar">
            <Overlay show={overlay} clicked={hideSidebar} />
            <Sidebar show={sidebar} clicked={hideSidebar} />
            <div className="logo">
                <a href="/">Šhïrts</a>
            </div>

            <nav>
                <ul>
                    <li className="nav__item"><NavLink to={{
                        pathname: '/'
                    }}>Home</NavLink></li>

                    <li className="nav__item"><NavLink to={{
                        pathname: '/your-cart'
                    }}>Your Cart</NavLink></li>

                    <li className="nav__item"><NavLink to={{
                        pathname: '/your-orders'
                    }}>Your Orders</NavLink></li>

                    <li className="nav__item">{!props.userInfo ?
                        <NavLink to={{
                            pathname: '/login'
                        }}><button className="login-btn">Login</button></NavLink> :
                        <button className="logout-btn" onClick={logoutHandler}>Logout</button>}</li>
                </ul>
            </nav>
            <i className="fas fa-bars" onClick={showSidebarHandler}></i>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCart: () => dispatch({ type: actions.clearCart }),
        clearUserInfo: () => dispatch({ type: actions.clearUserInfo }),
        clearOrderInfo: () => dispatch({ type: actions.clearOrderInfo })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);