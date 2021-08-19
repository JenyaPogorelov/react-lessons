import { makeStyles } from '@material-ui/core/styles';
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

const InputComponent = (props) => {
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
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            onKeyDown={({key}) => {if (key === 'Enter') {props.onKeyDown()}}}
        />
    )
}

export default InputComponent;