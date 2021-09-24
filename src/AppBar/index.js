import {useState} from "react";
// import {AppBar as MaterialUiAppBar} from "@material-ui/core";
import {useSelector} from 'react-redux';
import {InputAdornment} from "@material-ui/core";
// import {Toolbar} from "@material-ui/core";
import Box from '@material-ui/core/Box';
// import {Typography} from "@material-ui/core";
import {useLocation, useHistory} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
// import {AccountBox, AccountCircle} from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import ChatPreview from "./ChatPreview";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: '15px',
        color: theme.palette.background.default,
        textDecoration: 'none',
    },
    currentLink: {
        color: 'red',
    },
    appBar: {
        marginBottom: '15px'
    },

    root: {
        marginRight: "350px",
    },
    mainWrapper: {
        width: "350px",
        height: "100%",
        padding: "10px 10px 0px 10px",
    },
    topComponent: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    searchWrapper: {},
    input: {
        "& div": {
            borderRadius: "40px",
            "& input": {
                padding: "10px",
            }
        },
    },
    chatWrapper: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

const routes = [
    {pathTitle: 'Home', path: '/'},
    {pathTitle: 'Chat', path: '/Chat'},
    {pathTitle: 'Playground', path: '/playground'},
    {pathTitle: 'Profile', path: '/profile'},
    {pathTitle: 'Cats', path: '/cats'},

];

const AppBar = () => {
    const classes = useStyles();
    // const location = useLocation();
    const history = useHistory();
    const {chats, messages, chatsId, myUid} = useSelector((state) => state.chat);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [uId, setUid] = useState('');

    const onAddChat = () => {

    };

    return (
        <Drawer
            classes={{
                paper: classes.mainWrapper,
                root: classes.root
            }}
            variant={"permanent"}
            open
        >
            <Box className={classes.topComponent}>
                <IconButton onClick={handleClick}>
                    <MenuIcon/>
                </IconButton>

                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{horizontal: "left", vertical: "bottom"}}
                    anchorPosition={{top: 55, left: 25}}
                    anchorReference={"anchorPosition"}
                >
                    <MenuItem
                        key={1}
                        onClick={() => history.push('/cats')}
                    >
                        Коты
                    </MenuItem>
                    <MenuItem
                        key={2}
                        onClick={() => history.push('/got')}
                    >
                        Игра престолов
                    </MenuItem>
                    <MenuItem
                        key={3}
                        onClick={() => history.push('/profile')}
                    >
                        Профиль
                    </MenuItem>
                    <MenuItem
                        key={4}
                    >
                        Настройки
                    </MenuItem>
                </Menu>
                <TextField
                    variant={"outlined"}
                    className={classes.input}
                    placeholder={"Поиск"}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={"start"}>
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <Box className={classes.chatWrapper}>
                {chatsId.map((uid) => (
                    <ChatPreview
                        // key={chat.id}
                        // chat={chat}
                        // profile={profile}
                        uid={uid}
                        // messages={messages[profile.id] || []}
                    />
                ))}
            </Box>
            <Box>
                <TextField value={uId} onChange={e => setUid(e.target.value)}/>
                <Button onClick={onAddChat()}> Добавить </Button>
            </Box>
        </Drawer>

    );
}

export default AppBar;