import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    inputAuthor: {
        border: '0',
        padding: '5px',
        backgroundColor: 'white',
    },
}));

const InputAuthorComponent = ({onChange, value, onKeyDown}) => {
    const classes = useStyles();
    return (
        <input
            disabled
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