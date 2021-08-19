import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: 'aliceblue',
        height: '100%',
        border: '0',
    },
}));



const ButtonComponent = (props) => {
    const classes = useStyles();
    return (
        <Button
            classes={{
                root: classes.button
            }}
            onClick={() => {props.onClick()}}
            color="primary"
        >Отправить</Button>
    )
}

export default ButtonComponent;