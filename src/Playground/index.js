import {makeStyles} from '@material-ui/core/styles';
import {useSelector, useDispatch} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {incrementWithoutMessage} from "../Chat/chatSlice";

const useStyles = makeStyles((theme) => ({
    testBlock: {}

}));

const Playground = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const {countOfMessages, lastMessageText} = useSelector((state) => state.chat
    );

    console.log("Count", countOfMessages);

    return (
        <>
            <Button
                variant={'contained'}
                color={'primary'}
                onClick={() => {
                    dispatch(incrementWithoutMessage())
                }}
            > Add +1 </Button>
            <div>Last Message Sent: {lastMessageText}</div>
            <div>Count of Message: {countOfMessages}</div>
            <TextField className={classes.testBlock}>Plauground</TextField>
        </>
    );

}

export default Playground;