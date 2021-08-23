import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: 'aliceblue',
        height: '100%',
        border: '0',
    },
}));



const ButtonComponent = ({onClick}) => {
    const classes = useStyles();
    return (
        <Button
            classes={{
                root: classes.button
            }}
            onClick={() => {onClick()}}
            color="primary"
        >Отправить</Button>
    )
}

ButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default ButtonComponent;