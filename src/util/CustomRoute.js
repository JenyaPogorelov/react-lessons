import {useSelector, useDispatch} from "react-redux";
import {Route, Redirect} from "react-router-dom"
import AppBar from "../AppBar";
import {useEffect} from "react";
import {initMessageTracking} from "../Chat/actions";

const CustomRoute = ({secured, children, withAppBar = true, ...rest}) => {
    const {isAuthenticated} = useSelector((state) => state.chat);
    const dispatch = useDispatch();
    // console.log(isAuthenticated, "IS AUTH");

    useEffect(() => {
        dispatch(initMessageTracking());
    }, [dispatch]);

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