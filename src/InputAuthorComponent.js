import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inputAuthor: {
        border: '0',
        padding: '5px',
    },
}));

const InputAuthorComponent = (props) => {
    const classes = useStyles();
    return (
        <input
            placeholder='Ввведите автора'
            className={classes.inputAuthor}
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            onKeyDown={({key}) => {if (key === 'Enter') {props.onKeyDown()}}}
        />
    )
}

export default InputAuthorComponent;