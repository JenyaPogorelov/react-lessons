import { makeStyles } from '@material-ui/core/styles';

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


const MessageBoxComponent = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.messageBox}>
            <div className={classes.author} >{props.message.author}</div>
            <div className={classes.message} >{props.message.textMessage}</div>
        </div>

    )
}

export default MessageBoxComponent;