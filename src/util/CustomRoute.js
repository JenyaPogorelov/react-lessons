import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom"
import AppBar from "../AppBar";

const CustomRoute = ({secured, children, withAppBar = true, ...rest}) => {
    const {isAuthenticated} = useSelector((state) => state.chat);

    // console.log(isAuthenticated, "IS AUTH");

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