import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        background: '#181D23',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        width: '100%'
    },
    coin: {
        margin: '0 15px',
        width: 30
    },
    price: {
        color: 'white',
        fontSize: 20,
        margin: '0 20px'
    }
}))

export default function CoinBox(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img className={classes.coin} src={require('../assets/images/coin.png')} alt="coin"/>
            <span className={classes.price}>{props.price}</span>
        </div>
    )
}