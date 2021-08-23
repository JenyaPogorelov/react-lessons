import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ArrayChats from "./ArrayChats";

const useStyles = makeStyles((theme) => ({
    messageBox: {
        border: '1px solid black',
        borderRadius: '10px',
        padding: '0 15px 0 7px',
        backgroundCcolor: 'aliceblue',
        wordWrap: 'break-word',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '5px',
    },
    author: {
        color: 'red',
        fontWeight: 'bold',
    },
    message: {

    },
}));


const MessageBoxComponent = ({message}) => {
    const classes = useStyles();
    return (
        <div className={classes.messageBox}>
            <div className={classes.author} >{message.author}</div>
            <div className={classes.message} >{message.textMessage}</div>
        </div>

    )
}

ArrayChats.propTypes = {
    message: PropTypes.array,
}

export default MessageBoxComponent;