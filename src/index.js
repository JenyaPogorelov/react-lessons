import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from "./App";
import {ThemeProvider} from '@material-ui/styles';
import {theme} from "./theme";
import store from "./store";
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

