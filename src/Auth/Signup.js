import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeIsAuth} from "../Chat/chatSlice";
import {Link, useHistory} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import firebase from "firebase/compat";
import {db} from "../App";
import {useAuthState} from 'react-firebase-hooks/auth';

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
// import {authFirebase} from "../Firebase";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surName, setSurname] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    // const [user, loading] = useAuthState(firebase.auth());

    const firebaseApp = firebase.apps[0];

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurNameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const {user} = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            await db.ref("profiles").child(user.uid).set({
                name,
                surName,
            });
            dispatch(changeIsAuth(true))
            history.push('/playground')
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to register new account.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Name"
                        name="name"
                        type="name"
                        onChange={handleNameChange}
                        value={name}
                    />
                </div>
                <div>
                    <input
                        placeholder="Surname"
                        name="surname"
                        type="surname"
                        onChange={handleSurNameChange}
                        value={surName}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button type="submit">Login</button>
                </div>
                <hr/>
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </form>
            {/*<code>*/}
            {/*    <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>*/}
            {/*</code>*/}
        </div>
    );
};