import {useCallback} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";
import {CAT_API_URL, setLoading, setData, setError} from "./catSlice";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100%",
    },
    imageWrapper: {
        minHeight: "450px",
        minWidth: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    catImg: {
        width: "100%",
        height: "100%",
    }
}));

const getCatPhoto = () => async (dispatch, getState) => {
    const {
        cats: {data, loading, error}
    } = getState();

    if (!loading) {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const response = await fetch(CAT_API_URL);
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


const Cats = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector(state => state.cats);

    // console.log(data, loading, error);

    const getThunkCatPhoto = useCallback(
        () => dispatch(getCatPhoto()),
        [dispatch]
    );

    useEffect(() => {
        getThunkCatPhoto();
    }, [getThunkCatPhoto])

    return <div className={classes.wrapper}>
        <div className={classes.imageWrapper}>
            {loading && <CircularProgress/>}
            {error && <div>Возникла ошибка</div>}

            {!loading && !error && data && (
                <img className={classes.catImg} src={data.url} alt="Cats" />
            )}
        </div>

        <Button
            variant={'contained'}
            color={'primary'}
            disabled={loading}
            onClick={() => getThunkCatPhoto()}
        >
            Покажи кота
        </Button>
    </div>

}

export default Cats;