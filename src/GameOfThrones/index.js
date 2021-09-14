import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSelector, useDispatch} from 'react-redux';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100%",
    },
    imageWrapper: {
        width: "450px",
        minHeight: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
    infoWrapper: {
        margin: "10px 0 10px 0",
        width: "450px",
        height: "100%",
        backgroundColor: "blue",
        display: "flex",
        flexDirection: "column",

    },

}));

// const getGotPhoto = () => async (dispatch, getState) => {
//
// };


const Got = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector(state => state.got);

    // console.log(data, loading, error);
    console.log((Math.random() * (52 - 0) + 0).toFixed(0))
    return <div className={classes.wrapper}>
        <div className={classes.imageWrapper}>

        </div>
        <div className={classes.infoWrapper}>

        </div>

        <Button
            variant={'contained'}
            color={'primary'}
            disabled={loading}
            // onClick={}
        >
            Слудеющий герой
        </Button>
    </div>

}

export default Got;