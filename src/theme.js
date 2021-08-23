import { createTheme } from '@material-ui/core/styles';


export const theme = createTheme({
    overrides: {
        MuiFilledInput: {
            root: {
                // borderBottom: '1px solid black',
                height: '100%',
                '&::before': {
                    borderBottom: '0!important',
                }
            },
        }
    }
    // palette: {
    //     primary: {
    //         // Purple and green play nicely together.
    //         main: purple[500],
    //     },
    //     secondary: {
    //         // This is green.A700 as hex.
    //         main: '#11cb5f',
    //     },
    // },
});