import React, { Component } from "react";

import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
    render () {
        return (
            <div>
                <ul id="footer">
                    <a href="https://www.github.com/Elizabeth-Cho"><i class="fa fa-github" aria-hidden="true"/></a>
                    <a href="https://https://www.linkedin.com/in/elizabeth-c-cho/"><i class="fa fa-linkedin" aria-hidden="true"/></a>
                    <a href="https://medium.com/@18ChoEl"><i class="fa fa-medium" aria-hidden="true"/></a>
                    <a href="./assets/resume.pdf"><i class="fa fa-file-text-o" aria-hidden="true"/></a>
                </ul>
            </div>
        );
    }
}

export default Footer;
