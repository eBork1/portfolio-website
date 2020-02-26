import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faPhp} from '@fortawesome/free-brands-svg-icons';
import {faLaravel } from '@fortawesome/free-brands-svg-icons';

class Logos extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <FontAwesomeIcon
                            icon={faHtml5}
                            size="4x"
                            color="orange"
                            className="mx-2"
                        />
                        <FontAwesomeIcon
                            icon={faCss3Alt}
                            size="4x"
                            color="#264de4"
                            className="mx-2"
                        />
                        <FontAwesomeIcon
                            icon={faBootstrap}
                            size="4x"
                            color="#8A3AF0"
                            className="mx-2"
                        />
                        <FontAwesomeIcon
                            icon={faJsSquare}
                            size="4x"
                            color="yellow"
                            className="mx-2"
                        />
                        <FontAwesomeIcon
                            icon={faReact}
                            size="4x"
                            color="#3A8FF0"
                            className="mx-2"
                        />
                        <FontAwesomeIcon
                            icon={faPhp}
                            size="4x"
                            color="#787CB5"
                            className="mx-2"
                        />
                        <FontAwesomeIcon
                            icon={faLaravel}
                            size="4x"
                            color="#fb503b"
                            className="mx-2"
                        />
                        <img className="pb-2 mb-3" src="https://img.icons8.com/color/48/000000/firebase.png" alt="firebase"></img>
                        <img className="pb-2 mb-3" src="https://img.icons8.com/color/48/000000/google-cloud-platform.png" alt="google cloud"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logos;