import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Logos from './TechLogos';
import './Tech.css';


class Tech extends React.Component {
    render() {
        return (
            <div>
            <div className="container" id="techCont">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 mx-auto mt-4">
                        <Flip bottom big>
                            <p className="display-3 text-light" id="techTitle">Tech Stack</p>
                            <br />
                        </Flip>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-5 mx-auto">
                        <Fade bottom>
                            <p className="text-white">
                                Most of my programming experience has been in web development. From the front-end
                                with React JS to the back-end with Laravel, I've built static websites such as a restaurant
                                or a political campaign site, and dynamic web-apps such as an automated playlist curator for social events.
                            <br />
                                <br />
                                I'm always looking to expand my knowledge of programming, whether it's learning a new language, framework, or development
                                strategy. I'm currently learning c# with .NET. My ideal job is one in which I get to learn something new and advance myself as
                                a skilled programmer and an articulate thinker.
                            <br />
                                <br />
                            </p>
                        </Fade>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-12" id="logoSection">
                        <Fade bottom>
                            <Logos />
                        </Fade>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Tech;