import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import CustomRoute from "./util/CustomRoute";
import Chat from "./Chat";
import Playground from "./Playground";
import {Signup} from "./Auth/Signup";
import Profile from "./Profile";
import {makeStyles} from '@material-ui/core/styles';
import Cats from "./Cats";
import Got from "./GameOfThrones";
import {useEffect} from "react";
// import firebase from "firebase/app";
// import firebase from "firebase/compat";
// import {initializeApp} from "firebase/app";
import {initializeApp} from "firebase/firebase-app";
// import {firebaseConfig} from "./Firebase";
import firebase from "firebase/compat";

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
    projectId: "react-project-655fe",
    storageBucket: "react-project-655fe.appspot.com",
    messagingSenderId: "8418339955",
    appId: "1:8418339955:web:5461b66c23e283dacf8e06"
};
firebase.initializeApp(firebaseConfig);

const App = () => {
    const classes = useStyles();

    return <Router>
        <div className={classes.mainWrapper}>
            {/*<AppBar />*/}
            <Switch>
                <CustomRoute secured path="/chat/:id">
                    <Chat/>
                </CustomRoute>
                <CustomRoute path="/playground" secured withAppBar={false}>
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