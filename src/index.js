import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from "./App";
import {ThemeProvider} from '@material-ui/styles';
import {theme} from "./theme";
import store from "./store";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

