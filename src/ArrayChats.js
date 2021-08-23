import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';

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
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const ArrayChats = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Сообщение 1" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Сообщение 2" />
                </ListItem>
            </List>
            <Divider />
        </div>
    )
}

ArrayChats.propTypes = {

}

export default ArrayChats;