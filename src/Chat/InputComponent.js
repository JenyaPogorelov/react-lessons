import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    inputArea: {
        height: '100%',
        width: '100%',
        border: '0',
        borderRight: '1px solid black',
        // padding: "5px",
        backgroundColor: "white",
    },
}));

const InputComponent = ({onKeyDown, onChange, value}) => {
    const classes = useStyles();
    return (
        <TextField
            multiline
            maxRows={2}
            id="outlined-basic"
            label="Ввведите текст сообщения"
            variant="filled"
            classes={{
                root: classes.inputArea
            }}
            autoFocus={true}
            value={value}
            onChange={event => onChange(event.target.value)}
            onKeyDown={({key}) => {
                if (key === 'Enter') {
                    onKeyDown()
                }
            }}
        />
    )
}

InputComponent.propTypes = {
    onKeyDown: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}
export default InputComponent;