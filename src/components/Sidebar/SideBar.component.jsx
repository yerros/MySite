/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';


class SideBar extends Component {
    render(){
        return(
            <aside id="left-panel" className="left-panel">
            <nav className="navbar navbar-expand-sm navbar-default">
                <div id="main-menu" className="main-menu collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="index.html"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                        </li>
                        <li className="menu-item-has-children dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Movies</a>
                            <ul className="sub-menu children dropdown-menu">
                                <li><i className="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                                <li><i className="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
        )
    }
}

export default SideBar;