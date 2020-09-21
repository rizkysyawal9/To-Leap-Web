import React from 'react';

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            console.log('score');
            if (hasAccount) {
                handleLogin();
            } else {
                handleSignUp();
            }
        }
    };
    return (
        <div>
            <section className="login">
                <div className="loginContainer">
                    <label>Email</label>
                    <input
                        type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyPress}
                    ></input>
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                <button onClick={handleLogin}>Sign In</button>
                                <p>
                                    Don't have an account?{' '}
                                    <span
                                        onClick={() =>
                                            setHasAccount(!hasAccount)
                                        }
                                    >
                                        Sign up
                                    </span>
                                </p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleSignUp}>Sign Up</button>
                                <p>
                                    Have an account?{' '}
                                    <span
                                        onClick={() =>
                                            setHasAccount(!hasAccount)
                                        }
                                    >
                                        Sign in
                                    </span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
