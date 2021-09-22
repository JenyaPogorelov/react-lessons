import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import CustomRoute from "./util/CustomRoute";
import Chat from "./Chat";
import Playground from "./Playground";
import {Signup} from "./Auth/Signup";
import {Login} from "./Auth/Login";
import Profile from "./Profile";
import {makeStyles} from '@material-ui/core/styles';
import Cats from "./Cats";
import Got from "./GameOfThrones";
import firebase from "firebase/compat";
import {useAuthState} from 'react-firebase-hooks/auth';

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        width: "100vw",
        height: "100vh",
        display: "flex",
    },
}));


const firebaseConfig = {
    apiKey: "AIzaSyA_BWAjxbUtDjuR12oGYH0GnD6WPNMcdtk",
    authDomain: "react-project-655fe.firebaseapp.com",
    databaseURL: "https://react-project-655fe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-project-655fe",
    storageBucket: "react-project-655fe.appspot.com",
    messagingSenderId: "8418339955",
    appId: "1:8418339955:web:5461b66c23e283dacf8e06"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

const App = () => {
    const classes = useStyles();

    const [user, loading] = useAuthState(firebase.auth());

    if (loading) {
        return <div>Loading</div>
    }

    console.log(user, 'user');

    return <Router>
        <div className={classes.mainWrapper}>
            {/*<AppBar />*/}
            <Switch>
                <CustomRoute secured path="/chat/:id">
                    <Chat/>
                </CustomRoute>
                <CustomRoute path="/playground" secured withAppBar={true}>
                    <Playground/>
                </CustomRoute>
                <CustomRoute path="/cats" secured>
                    <Cats/>
                </CustomRoute>
                <CustomRoute path="/got" secured>
                    <Got/>
                </CustomRoute>
                <CustomRoute path="/profile">
                    <Profile/>
                </CustomRoute>

                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>

                <Route path="/" withAppBar={false}>>
                    <Home/>
                </Route>
            </Switch>
        </div>
    </Router>
}

export default App;