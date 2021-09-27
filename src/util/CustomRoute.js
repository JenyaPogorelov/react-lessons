import {useSelector, useDispatch} from "react-redux";
import {Route, Redirect} from "react-router-dom"
import AppBar from "../AppBar";
import {useEffect} from "react";
import {initMessageTracking} from "../Chat/actions";
import {initChatTracking} from "../AppBar/actions";
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from "firebase/compat";
import {setMyUid, changeIsAuth} from "../Chat/chatSlice";

const CustomRoute = ({secured, children, withAppBar = true, ...rest}) => {
    const {isAuthenticated, myUid} = useSelector((state) => state.chat);

    const [user, loading, error] = useAuthState(firebase.auth());

    const dispatch = useDispatch();


    // console.log(isAuthenticated, "IS AUTH");

    useEffect(() => {
        dispatch(initMessageTracking());
    }, [dispatch]);

    useEffect(() => {
        if (myUid) {
           dispatch(initChatTracking(myUid));
        }
    }, [myUid, dispatch]);

    if (user && !myUid) {
        dispatch(setMyUid(user.uid));
        dispatch(changeIsAuth(true));

        return (
            <Route {...rest} >
                {withAppBar && <AppBar/>}
                {children}
            </Route>);
    }

    if ((secured && isAuthenticated) || !secured) {
        return (
            <Route {...rest} >
                {withAppBar && <AppBar/>}
                {children}
            </Route>);
    }

    return <Redirect to={{pathname: "/login"}}/>
}

export default CustomRoute;