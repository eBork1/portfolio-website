import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render() {
        return (
            <div id="pj">
                <p className="display-1 text-light font-weight-light">
                    Ethan <br />
                    Borkosky
                </p>
                <p className="display-4 text-light font-weight-lighter">
                    Software Developer
                </p>

                <div className="row justify-content-center">
                    <a className="pr-3 pl-3" href="https://www.linkedin.com/in/ethan-borkosky-764aa6186/" target="_blank" rel="noopener noreferrer" id="icons" title="linkedin">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size="3x"
                            color="white"
                        />
                    </a>
                    <a className="pr-3 pl-3" href="https://github.com/eBork1" target="_blank" rel="noopener noreferrer" id="icons" title="github">
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="3x"
                            color="white"
                        />
                    </a>
                    <div className="pr-3 pl-3" id="icons" title="blog- coming soon">
                        <FontAwesomeIcon
                            icon={faBlog}
                            size="3x"
                            color="white"
                        />
                    </div>
                    <a className="pr-3 pl-3" href="/Ethan_Borkosky_Resume.pdf" target="_blank" rel="noopener noreferrer" id="icons" download="ethan-borkosky-resume" title="resume">
                        <FontAwesomeIcon
                            icon={faFile}
                            size="3x"
                            color="white"
                        />
                    </a>
                </div>
            </div>
        )
    }
}

export default Header;