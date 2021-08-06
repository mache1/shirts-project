import './Login.scss';
import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            props.setUserInfo({
                email: emailRef.current.value
            });
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/your-cart");
        } catch {
            setError("Failed to login");
        }

        setLoading(false);
    }

    return (
        <div className="login-page">
            <h1>Login</h1>
            {error && <h1 className="error" style={{ color: 'red', fontSize: '2rem' }}>{error}.</h1>}
            <form onSubmit={handleSubmit}>
                <input type="text" ref={emailRef} placeholder="Enter Your Email" />
                <input type="password" ref={passwordRef} placeholder="Enter Your Password" />
                <button type="submit" disabled={loading}>Login</button>
            </form>
            <p>Don't have an account? Create one <NavLink to={{
                pathname: '/signup'
            }}>here</NavLink>.</p>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (value) => dispatch({ type: actions.setUserInfo, value: value })
    }
}

export default connect(null, mapDispatchToProps)(Login);