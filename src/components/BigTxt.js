import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) =>({
    big:{
        width: '100%',
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '7vw',
        color: 'rgba(255, 255, 255, .1)',
        zIndex: 'revert',
        fontWeight: 900,
        textAlign: 'center'
    } 
}));

function BigTxt({text}) {
    const classes = useStyles();
  return (
    <h1 className={classes.big}>
      {text}
    </h1>
  )
}

export default BigTxt
