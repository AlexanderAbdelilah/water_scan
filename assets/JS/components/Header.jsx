import React from 'react';
import '/assets/styles/app.css';
import logo from "/Applications/MAMP/htdocs/water_scan/src/img/LogoWaterScan.jpeg"

export default class Header extends React.Component {
    render() {
        return (
            
                <header className="Header bg-primary py-5 mb-5">
                    <a href="Home"><img className="logoheader" src={logo}/></a>
                </header>
            
        )
    }
}