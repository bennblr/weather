const dayForecastStyles = ({palette: {iconBg}}) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '100%',
        padding: '20px 16px 24px'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 15px'
    },
    description: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    advanced: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 15px'
    },
    img: {
        backgroundColor: iconBg,
        borderRadius: '50%'
    },
    name: {
        overflowWrap: 'anywhere'
    }
});

export default dayForecastStyles;
