const headerStyles = ({blindFontSize}) => ({
    blindButton: {
        display: 'flex',
        alignItems: 'center',
        fontSize: blindFontSize,
        padding: '6px 12px',
        cursor: 'pointer',
        '&::selection': {
            background: 'transparent'
        },
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    tabs: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default headerStyles;
