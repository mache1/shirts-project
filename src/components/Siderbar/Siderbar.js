import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';

const Sidebar = (props) => {
    const { logout } = useAuth();

    async function logoutHandler() {
        await logout();
        props.clearCart();
        props.clearUserInfo();
        props.clearOrderInfo();
    }

    return (
        <div className="sidebar" style={{
            transform: props.show ? 'translate(0)' : 'translate(100%)'
        }}>
            <i className="fas fa-times" onClick={props.clicked}></i>
            <ul>
                <li className="nav__item"><NavLink onClick={props.clicked} to={{
                    pathname: '/'
                }}>Home</NavLink></li>

                <li className="nav__item"><NavLink onClick={props.clicked} to={{
                    pathname: '/your-cart'
                }}>Your Cart</NavLink></li>

                <li className="nav__item"><NavLink onClick={props.clicked} to={{
                    pathname: '/your-orders'
                }}>Your Orders</NavLink></li>

                <li className="nav__item">{!props.userInfo ?
                    <NavLink onClick={props.clicked} to={{
                        pathname: '/login'
                    }}><button className="login-btn">Login</button></NavLink> :
                    <NavLink onClick={() => { props.clicked(); logoutHandler(); }} to={{
                        pathname: '/login'
                    }}><button className="logout-btn">Logout</button></NavLink>}</li>
            </ul>
        </div>
    );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);