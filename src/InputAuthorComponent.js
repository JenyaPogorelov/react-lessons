import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ButtonComponent from "./ButtonComponent";

const useStyles = makeStyles((theme) => ({
    inputAuthor: {
        border: '0',
        padding: '5px',
    },
}));

const InputAuthorComponent = ({onChange, value, onKeyDown}) => {
    const classes = useStyles();
    return (
        <input
            placeholder='Ввведите автора'
            className={classes.inputAuthor}
            value={value}
            onChange={event => onChange(event.target.value)}
            onKeyDown={({key}) => {if (key === 'Enter') {onKeyDown()}}}
        />
    )
}

InputAuthorComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default InputAuthorComponent;