import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(8),
        right: theme.spacing(2),
      
    }
}));
  

const CustomNewFab = props => {
    const clasess = useStyles();

    const handleClick = (event) => {
        props.onClick(event);
    }

    return (
        <Fab onClick={handleClick} className={clasess.fab} color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    )
}

CustomNewFab.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default CustomNewFab
