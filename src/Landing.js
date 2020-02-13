import React, { Component } from "react";

import "./assets/css/landing.css";
class Landing extends Component {
    render() {
        return (
            <div class="main-content">
                <div id="home" class="page">
                    <div class="text">
                        <h1>Elizabeth Cho</h1>
                        <hr class="home-hr"></hr>
                        <h2>Software Engineer // Graphic Design // Digital Art</h2>
                    </div>
                </div>
                <div id="skills" class="page">
                    <h4>Technical Skills</h4>
                    <div class="section">
                        <h3>Software Development/Languages</h3>
                        <hr class="section-hr"></hr>
                        <p>Java // C++ // C // HTML // CSS // JavaScript //
                        Python // Git // MySQL // AWS // Wordpress</p>
                    </div>
                    <div class="section">
                        <h3>Art/Graphic Design/Media</h3>
                        <hr class="section-hr"></hr>
                        <p>FireAlpaca // Krita // Canva // Adobe Illustrator
                        Adobe Photoshop // Adobe Premiere Pro // Mixcraft 8</p>
                    </div>
                </div>
                <div id="projects" class="page">
                    <h4>Projects</h4>
                    <div class="section">
                        <h3>Parsy.io Landing Page</h3>
                        <hr class="section-hr"></hr>
                        <p><b>Languages: </b>HTML, CSS, JavaScript</p>
                        <p>Parsy.io is a startup that helps students during the
                        semester by automatically plugging assignment due
                        dates, exams, and office hours by parsing through
                        course syllabi. I designed and implemented the landing
                        page, which included smooth scrolling and a signup for
                        email subscriptions.</p>
                    </div>
                    <div class="section">
                        <h3>Get in the Frame</h3>
                        <hr class="section-hr"></hr>
                        <p><b>Languages: </b>HTML, CSS</p>
                        <p>This project was my team's submission for the Spring
                        2019 HopHacks event. The purpose of web application is
                        to provide real time feedback on taekwondo punches. I
                        worked on the front end of the app, which also included
                        the icon and banner. </p>
                    </div>
                    <div class="section">
                        <h3>Personal Website</h3>
                        <hr class="section-hr"></hr>
                        <p><b>Languages: </b>HTML, CSS, JavaScript</p>
                        <p>This site is designed to be a digital portfolio of
                        both my coding projects and my graphic design/artwork.
                        The first versions of the site were made using just
                        HTML, CSS and JavaScript, but the current version also
                        utilizes the React library.</p>
                    </div>
                    <div class="section">
                        <h3>Choose Your Own Adventure Game Demo</h3>
                        <hr class="section-hr"></hr>
                        <p><b>Languages: </b>Java</p>
                        <p>This game demo was a part of my senior capstone
                        project in high school. While the demo did not show off
                        the complete storyline, it did demonstrate some of the
                        key features, including dialogue, background switching,
                        and story/dialogue branching.</p>
                    </div>
                    <div class="section" id="bottom">
                        <h3>Information Medical Database Collection</h3>
                        <hr class="section-hr"></hr>
                        <p><b>Languages: </b>Java</p>
                        <p>This was a proof of concept of a solution that
                        automates triage to address emergency room overcrowding
                        made for an AP Biology final project.</p>
                    </div>
                </div>
                <div id="portfolio" class="page">
                    <h4>Art/Design Portfolio</h4>
                    <div class="category" id="graphic-design">
                    <h3>Design</h3>
                    <hr class="section-hr"></hr>
                    <br/>
                        <div class="content-pane">
                            <div class="col-left">
                                <div class="gallery-img">
                                    <img src={require("./assets/images/design/HopHacks Fall 2018 Competition - Bird Icon.gif")}/>
                                    <p>HopHacks Fall 2018 Competition - Bird Icon</p>
                                </div>
                                <div class="gallery-img">
                                    <img src={require("./assets/images/design/BME Shirt Design Submission - Fall 2018.jpeg")}/>
                                    <p>BME Shirt Design Submission - Fall 2018</p>
                                </div>
                                <div class="gallery-img banner">
                                    <img src={require("./assets/images/design/HopHacks Spring 2019 Competition - Banner.png")}/>
                                    <p>HopHacks Spring 2019 Competition - Banner</p>
                                </div>
                                <div class="gallery-img banner">
                                    <img src={require("./assets/images/design/HopHacks Fall 2019 - Recruitment Banner.png")}/>
                                    <p>HopHacks Fall 2019 - Recruitment Banner</p>
                                </div>
                            </div>
                            <div class="col-right">
                                <div class="gallery-img">
                                    <img src={require("./assets/images/design/HopHacks Spring 2019 Competition - Bird.png")}/>
                                    <p>HopHacks Spring 2019 Competition - Bird</p>
                                </div>
                                <div class="gallery-img">
                                    <img src={require("./assets/images/design/HopHacks Fall 2019 - Facebook Filter.png")}/>
                                    <p>HopHacks Fall 2019 - Facebook Filter</p>
                                </div>
                                <div class="gallery-img">
                                    <img src={require("./assets/images/design/Yext Networking.png")}/>
                                    <p>Yext Networking Flyer</p>
                                </div>
                                <div class="gallery-img">
                                    <img src={require("./assets/images/design/HopHacks Fall 2019 - Recruitment Banner V1.png")}/>
                                    <p>HopHacks Fall 2019 - Initial Recruitment Banner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category" id="art">
                        <h3>Art</h3>
                        <hr class="section-hr"></hr>
                        <br/>
                        <div class="content-pane">
                            <div class="col-left">
                                <div class="gallery-img banner">
                                    <img src={require("./assets/images/art/RS3 Wallpaper.png")}/>
                                    <p>Shadow Magic Wallpaper</p>
                                </div>
                                <div class="gallery-img banner">
                                    <img src={require("./assets/images/art/Connor RK800.png")}/>
                                    <p>Detroit: Become Human RK800 Wallpaper</p>
                                </div>
                                <div class="gallery-img banner">
                                    <img src={require("./assets/images/art/Mystic.png")}/>
                                    <p>Mystic Wallpaper</p>
                                </div>
                                <div class="gallery-img">
                                    <img src={require("./assets/images/art/Phone Wallpaper - Flower.png")}/>
                                    <p>Flower Wallpaper</p>
                                </div>
                                <div class="gallery-img">
                                    <img src={require("./assets/images/art/Phone Wallpaper - Girl.png")}/>
                                    <p>Dark Wallpaper</p>
                                </div>
                            </div>
                            <div class="col-right">
                                <div class="gallery-img banner">
                                    <img src={require("./assets/images/art/Galaxy.png")}/>
                                    <p>Galaxy Wallpaper</p>
                                </div>
                                <div class="gallery-img banner">
                                    <img src={require("./assets/images/art/Particles.png")}/>
                                    <p>Particles Wallpaper</p>
                                </div>
                                <div class="gallery-img banner">
                                    <img src={require("./assets/images/art/Social Media Icons.png")}/>
                                    <p>Social Media Profile Pictures</p>
                                </div>
                                <div class="gallery-img">
                                    <img src={require("./assets/images/art/Exceptions.png")}/>
                                    <p>Throwing exceptions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Landing;
