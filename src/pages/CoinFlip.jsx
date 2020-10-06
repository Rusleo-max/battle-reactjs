import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CoinBox from "../components/CoinBox";

const useStyles = makeStyles(() => ({
    root: {
        margin: '50px',
        border: '3px solid #2B323A'
    },
    content: {
        backgroundImage: `url("${require('../assets/images/CoinFlip_bg.png')}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    contentSection: {
        background: 'transparent',
        display: 'flex',
    },
    contentSector: {
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8%',
        marginBottom: '5%'
    },
    contentImage: {
        width: '70%',
        margin: '15%',
        position: 'relative'
    },
    characterImage: {
        width: '100%'
    },
    badgeImage: {
        position: 'absolute',
        width: '40%',
        left: '-5%',
        top: '-5%'
    }
}));

export default function CoinFlip() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title="coinflip"/>
            <div className={classes.content}>
                <div className={classes.contentSection}>
                    <div className={classes.contentSector}>
                        <div className={classes.contentImage}>
                            <img className={classes.characterImage} src={require('../assets/images/character_human.png')} alt="human character"/>
                            <img className={classes.badgeImage} src={require('../assets/images/image_badge_1.png')} alt="badge"/>
                        </div>
                        <CoinBox price="2400.00"/>
                    </div>
                    <img src={require('../assets/images/bound_line.png')} alt="bound line"/>
                    <div className={classes.contentSector}>
                        <div className={classes.contentImage}>
                            <img className={classes.characterImage} src={require('../assets/images/character_beast.png')} alt="human character"/>
                            <img className={classes.badgeImage} src={require('../assets/images/image_badge_2.png')} alt="badge"/>
                        </div>
                        <CoinBox price="2350.00"/>
                    </div>
                </div>
                <Footer text="provably fair"/>
            </div>
        </div>
    )
}