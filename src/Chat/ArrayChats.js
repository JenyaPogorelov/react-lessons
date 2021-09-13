import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
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
    },
    linkChat: {
        textDecoration: 'none',
        color: 'blue',
    },
    currenChat: {
        color: 'red',
    }
}));

// function ListItemLink(props) {
//
//     return <ListItem button component="a" {...props} />;
// }

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const ArrayChats = (props) => {

    const [chatList, setChatList] = useState([
        {id: 1, textMessage: 'inputMessage', author: 'author', nameRoom: 'room1',},
        {id: 2, textMessage: 'inputMessage2', author: 'author2', nameRoom: 'room2',},
        {id: 3, textMessage: 'inputMessage3', author: 'author3', nameRoom: 'room3',},
    ]);

    useEffect(() => {
        // console.log(chatList);
    }, [])

    const classes = useStyles();
    const query = useQuery();
    const nameRoom = query.get('room');
    const location = useLocation();
    const pathName = location.pathname;

    const deleteChat = (event) => {
        const delIndex = chatList.filter((element, index) => index !== +event);
        // console.log(delIndex)
        setChatList(prevState =>
            [...delIndex]
        )
    }
    const addChat = () => {
        const nameChat = prompt('Введите название чата', 'default')
        const getLastId = chatList[chatList.length - 1].id + 1;
        setChatList(prevState => [...prevState, {id: getLastId, textMessage: 'inputMessage', author: nameChat, nameRoom: nameChat},])
        console.log(nameRoom)
        console.log(pathName)
    }


    return (
        <div className={classes.root}>
            <ListItem button className={classes.addChatBtn} onClick={() => addChat()}>
                <ListItemText primary={`Добавить чат`}/>
            </ListItem>
            <Divider/>
            {chatList.map((value, index) => (
                <Link to={`/Chat?room=${value.id}`} key={index} className={`${classes.linkChat}  ${value.id === +nameRoom ? classes.currenChat : ''}`}>
                    <ListItem button key={index} id={index}>
                        <ListItemIcon key={index} id={index} onClick={(event) => deleteChat(event.currentTarget.id)}>
                            <DeleteIcon key={index} id={index}/>
                        </ListItemIcon>
                        <ListItemText primary={`${value.nameRoom}`}/>
                    </ListItem>
                </Link>
            ))}

        </div>
    )
}

ArrayChats.propTypes = {}

export default ArrayChats;