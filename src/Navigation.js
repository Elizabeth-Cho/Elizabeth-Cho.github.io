import React, { Component } from "react";

import "./assets/css/navigation.css";
import 'font-awesome/css/font-awesome.min.css';
import Pdf from './assets/resume.pdf';

class Navigation extends Component {
    render() {
        return (
            <div id="side">
                <ul id="nav">
                    <li class="nav-item"><a href="/"><i class="fa fa-home" aria-hidden="true"/></a></li>
                    <li class="nav-item"><a href="#skills"><i class="fa fa-cogs" aria-hidden="true"/></a></li>
                    <li class="nav-item"><a href="#projects"><i class="fa fa-code" aria-hidden="true"/></a></li>
                    <li class="nav-item"><a href="#portfolio"><i class="fa fa-picture-o" aria-hidden="true"/></a></li>
                </ul>
                <ul id="footer">
                    <li><a href="https://www.github.com/Elizabeth-Cho"><i class="fa fa-github" aria-hidden="true"/></a></li>
                    <li><a href="https://www.linkedin.com/in/elizabeth-c-cho/"><i class="fa fa-linkedin" aria-hidden="true"/></a></li>
                    <li><a href="https://medium.com/@Elizabeth_Cho"><i class="fa fa-medium" aria-hidden="true"/></a></li>
                    <li><a href={Pdf}><i class="fa fa-file-text-o" aria-hidden="true"/></a></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;
