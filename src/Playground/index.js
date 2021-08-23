import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    testBlock: {

    }

}));

const Index = () => {
    const classes = useStyles();

    return <div className={classes.testBlock}>Plauground</div>
}

export default Index;