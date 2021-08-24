import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    testBlock: {

    }

}));

const Profile = () => {
    const classes = useStyles();

    return <div className={classes.testBlock}>Страница пользователя</div>
}

export default Profile;