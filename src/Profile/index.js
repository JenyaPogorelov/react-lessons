import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Input} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSelector, useDispatch} from 'react-redux';
import {addAuthor} from "./profileSlice";

const useStyles = makeStyles((theme) => ({
    buttonBlock: {
        marginRight: '10px',
    }

}));

const Profile = () => {
    const classes = useStyles();

    const {authorName} = useSelector((state) => state.profile);
    const [author, setAuthor] = useState(authorName);

    const dispatch = useDispatch();

    const changeAuthor = () => {

        if (author) {
            dispatch(addAuthor(author))
            // console.log('test')
        } else {
            console.log('Авторизуйтесь');
        }

    };

    return (
        <>
            <h1>Страница пользователя</h1>
            <h3>Вы авторизовались как: {authorName}</h3>
            <Button
                className={classes.buttonBlock}
                variant="contained"
                color="primary"
                onClick={() => {changeAuthor()}}
            >Записать</Button>
            <Input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                onKeyDown={({key}) => {
                    if (key === 'Enter') {
                        changeAuthor()
                    }
                }}
            >Test</Input>
        </>

)
}

export default Profile;