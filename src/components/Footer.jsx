import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(()=>({
    root: {
        textTransform: 'capitalize',
        color: '#7D8286',
        textAlign: 'center',
        padding: 15,
        fontSize: 20
    }
}))
export default function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>{props.text}</div>
    )
}