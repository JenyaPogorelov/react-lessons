import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import Playground from "./Playground";
import AppBar from "./AppBar";
import Profile from "./Profile";
import {makeStyles} from '@material-ui/core/styles';
import Cats from "./Cats";
import Got from "./GameOfThrones";

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        width: "100vw",
        height: "100vh",
        display: "flex",
    },
}));


const App = () => {
    const classes = useStyles();
    return <Router>
        <div className={classes.mainWrapper}>
            <AppBar />
            <Switch>
                <Route path="/chat/:id">
                    <Chat />
                </Route>
                <Route path="/playground">
                    <Playground />
                </Route>
                <Route path="/cats">
                    <Cats />
                </Route>
                <Route path="/got">
                    <Got />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
}

export default App;