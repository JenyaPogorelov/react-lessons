import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSelector, useDispatch} from 'react-redux';
import {GOT_API_URL, setData, setError, setLoading} from "./gotSlice";
import {useCallback, useEffect} from "react";


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
        minHeight: "650px",
        minWidth: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    infoWrapper: {
        padding: "10px 0px 0px 10px",
        margin: "10px 0 15px 0",
        width: "450px",
        height: "150px",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",

    },

}));

const getGotPhoto = () => async (dispatch, getState) => {
    const {
        got: {loading}
    } = getState();
    if (!loading) {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const response = await fetch(GOT_API_URL);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const result = await response.json();
            dispatch(setData(result));
        } catch (e) {
            dispatch(setError(true));
        } finally {
            dispatch(setLoading(false));
        }

    }

};


const Got = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector(state => state.got);
    let id = (Math.random() * (52 - 0) + 0).toFixed(0)

    const getThunkGgotPhoto = useCallback(
        () => dispatch(getGotPhoto()),
        [dispatch]
    );

    useEffect(() => {
        getThunkGgotPhoto();
    }, [getThunkGgotPhoto])

    return <div className={classes.wrapper}>
        <div className={classes.imageWrapper}>
            {loading && <CircularProgress/>}
            {error && <div>Возникла ошибка</div>}

            {!loading && !error && data && (
                <img className={classes.catImg} src={data[id].imageUrl} alt="GOT" />
            )}
        </div>
        <div className={classes.infoWrapper}>
            {!loading && !error && data && (
                <>
                    <div>First Name: {data[id].firstName}</div>
                    <div>Last Name:  {data[id].lastName}</div>
                    <div>Full Name:  {data[id].fullName}</div>
                    <div>Title:      {data[id].title}</div>
                    <div>Family:     {data[id].family}</div>
                </>

            )}

        </div>

        <Button
            variant={'contained'}
            color={'primary'}
            disabled={loading}
            onClick={() => getThunkGgotPhoto()}
        >
            Слудеющий герой
        </Button>
    </div>

}

export default Got;