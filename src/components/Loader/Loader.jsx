import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import loaderStyles from './Loader.styles';
import cn from 'classnames';

const Loader = ({classes, showLoader}) => (
    <>
        {showLoader && <>
            <div className={cn(classes.root, classes.bg)} />
            <div className={classes.root}>
                {<CircularProgress color="secondary"/>}
            </div>
        </>}
    </>
);

export default withStyles(loaderStyles)(Loader);
