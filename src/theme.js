import {createMuiTheme} from '@material-ui/core';

const colors = {
    white: '#FFFFFF',
    black: '#333333',

    grey01: '#D0D8E2',
    grey02: '#EBEEF3',
    blue: '#3E4B9A'
};

export const theme = createMuiTheme({
    palette: {
        iconBg: colors.blue
    },
    blindFontSize: 16
});

export const blindTheme = createMuiTheme({
    palette: {
        primary: {
            light: colors.black,
            main: colors.black,
            dark: colors.black
        },
        action: {
            disabled: colors.black,
            disabledBackground: colors.grey01
        },
        text: {
            primary: colors.black,
        },
        iconBg: colors.black
    },
    typography: {
        fontSize: 20
    },
    blindFontSize: 20
});
