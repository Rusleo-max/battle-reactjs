import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#333333',
    },
    link: {
        textDecoration: 'none',
        padding: '20px',
        '&:focus': {
            background: 'darkcyan'
        },
        fontSize: 18,
        fontWeight: 600,
        color: 'white'
    }
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link className={classes.link} to="/coin-flip">CoinFlip</Link>
            <Link className={classes.link} to="/flower-poker">FlowerPoker</Link>
        </div>
    )
}