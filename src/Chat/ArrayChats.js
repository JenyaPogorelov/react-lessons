import React, {useState, useEffect} from "react";
// import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        left: '-200px',
        top: '-1px',
        position: 'absolute',
        width: '100%',
        maxWidth: 200,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid black',
    },
    addChatBtn: {
        textAlign: 'center',
    }
}));

function ListItemLink(props) {

    return <ListItem button component="a" {...props} />;
}

const ArrayChats = (props) => {

    const [chatList, setChatList] = useState([
        {textMessage: 'inputMessage', author: 'author'},
        {textMessage: 'inputMessage2', author: 'author2'},
        {textMessage: 'inputMessage3', author: 'author3'}
    ]);

    useEffect(() => {
        // console.log(chatList);
    }, [])

    const classes = useStyles();

    const deleteChat = (event) => {
        // const delIndex = chatList.indexOf(chatList.find((element, index) => index === +event));
        const delIndex = chatList.filter((element, index) => index !== +event);
        console.log(delIndex)
        setChatList(prevState =>
            // chatList.filter((element, index) => index !== +event);
            [...delIndex]
        )
        // setChatList(chatList.splice(delIndex, 1))
        // setChatList(prevState => [...prevState, prevState.splice(delIndex, 1)])
        // console.log(chatList)
        // // let delIndex = cart.indexOf(cart.find(element => element.id === +item.id));
        // // cart.splice(delIndex, 1);
    }
    const addChat = () => {
        const nameChat = prompt('Введите название чата', 'default')
        setChatList(prevState => [...prevState, {textMessage: 'inputMessage', author: nameChat}])
    }
    return (
        <div className={classes.root}>
            <ListItem button className={classes.addChatBtn} onClick={() => addChat()}>
                <ListItemText primary={`Добавить чат`}/>
            </ListItem>
            <Divider/>
            {chatList.map((value, index) => (
                <ListItem button key={index} id={index}>
                    <ListItemIcon key={index} id={index} onClick={(event) => deleteChat(event.currentTarget.id)}>
                        <DeleteIcon key={index} id={index}/>
                    </ListItemIcon>
                    <ListItemText primary={`Сообщение ${index}`}/>
                </ListItem>
            ))}

        </div>
    )
}

ArrayChats.propTypes = {}

export default ArrayChats;