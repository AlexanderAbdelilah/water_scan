import React from "react";
import {
BrowserRouter, Route, Switch
} from "react-router-dom";
import Piezo from "/Applications/MAMP/htdocs/water_scan/assets/JS/components/Piezo.jsx";
import Home from "/Applications/MAMP/htdocs/water_scan/assets/JS/components/Home.jsx";
import Header from "/Applications/MAMP/htdocs/water_scan/assets/JS/components/Header.jsx";
import '/Applications/MAMP/htdocs/water_scan/assets/styles/app.css';

export default class App extends React.Component {
render() {
return (
    <BrowserRouter>
        <div>
            {<Header/>}
            <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>
                <Route path='/piezo' component={Piezo}/>
                    {/*<Piezo/>
                </Route>*/}
            </Switch>
        </div>
    </BrowserRouter>
)
}
}