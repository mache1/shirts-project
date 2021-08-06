import './Signup.scss';
import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';

const Signup = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value)
            return setError("Passwords do not match");

        try {
            setError("");
            setLoading(true);
            props.setUserInfo({
                email: emailRef.current.value,
            });
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/your-cart");
        } catch {
            setError("Failed to create an account");
        }

        setLoading(false);
    }

    return (
        <div className="signup-page">
            <h1>Signup</h1>
            {error && <h1 className="error" style={{ color: 'red' }}>{error}.</h1>}
            <form onSubmit={handleSubmit}>
                <input type="text"
                    id="email"
                    ref={emailRef}
                    placeholder="Enter Your Email" />

                <input type="password"
                    id="passowrd"
                    ref={passwordRef}
                    placeholder="Enter Your Password" />

                <input type="password"
                    id="passowrd-confirmed"
                    ref={passwordConfirmRef}
                    placeholder="Confirm Your Password" />

                <button type="submit" disabled={loading}>Signup</button>
            </form>
            <p>Already have an account? Click <NavLink to={{
                pathname: '/login'
            }}>here</NavLink>.</p>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (value) => dispatch({ type: actions.setUserInfo, value: value })
    }
}

export default connect(null, mapDispatchToProps)(Signup);