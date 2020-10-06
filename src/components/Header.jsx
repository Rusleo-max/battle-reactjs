import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import battleIcon from '../assets/images/battles-icon.png'

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        background: '#1B2127',
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 18
    },
    titleWrapper:{
        display: 'flex',
        alignItems: 'center'
    },
    battleLogo: {
        margin: 20,
        width: 30
    },
    title: {
        textTransform: 'uppercase'
    },
    time: {
        margin: 20
    }
}))

export default function Header(props) {
    const classes = useStyles();
    return (<div className={classes.root}>
        <div className={classes.titleWrapper}>
            <img className={classes.battleLogo} src={battleIcon} alt="battle icon"/>
            <span className={classes.title}>{props.title}</span>
        </div>
        <span className={classes.time}>00:00:30</span>
    </div>)
}