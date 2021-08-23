import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    userBlock: {

    }

}));

const Home = () => {
    const classes = useStyles();

    return <div className={classes.userBlock}>Страница профиля</div>
}

export default Home;