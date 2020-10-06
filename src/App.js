import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from "./layout/navbar";
import CoinFlip from "./pages/CoinFlip";
import FlowerPoker from "./pages/FlowerPoker";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(()=>({
    App: {
        background: '#1E2228',
        width: '100%',
        height: '100%',
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.App}>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/coin-flip'/>
                </Route>
                <Route path='/coin-flip' component={CoinFlip}/>
                <Route path='/flower-poker' component={FlowerPoker}/>
            </Switch>
        </div>
    );
}

export default App;
