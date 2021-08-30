import {makeStyles} from '@material-ui/core/styles';
import {useSelector, useDispatch} from "react-redux";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
    testBlock: {}

}));

const Playground = (props) => {
    const classes = useStyles();

    const {messagesArray} = useSelector((state) => state.chat
    );

    return (
        <>
            <div>Array of Messages: {messagesArray.map((o,i) => <div key={i}>{o.textMessage}</div>)}</div>
            <TextField className={classes.testBlock}>Plauground</TextField>
        </>
    );

}

export default Playground;