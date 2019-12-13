import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import EthanImg from './Ethan.jpg';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div id="cont" className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 mx-auto mt-4">
                        <Flip bottom big>
                            <p className="display-3 text-dark">About Me</p>
                            <br />
                        </Flip>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Fade bottom>
                            <p className="text-dark">
                                My Name is Ethan Borkosky and I am a software developer currently living in Lexington, Kentucky.
                                Aside from software development, my favorite things are music, cooking, and video games. I dabbled with
                                coding in high school and part of college, but never really dove into it until I decided to put a hold on 
                                school and take a 16-week full stack web development bootcamp which was one of the best decisions I have ever made.
                                I love staying up to date with the dev world and I'm always eager to learn something new. 
                            </p>
                        </Fade>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 pb-5">
                        <Fade bottom>
                            <img className="img-thumbnail" src={EthanImg} alt="Ethan" />
                        </Fade>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        )
    }
}

export default About;