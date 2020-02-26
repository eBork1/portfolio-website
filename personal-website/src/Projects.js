import React from 'react';
import Flip from 'react-reveal/Flip';
import './CurrentProjects.css';

class Projects extends React.Component {
    render() {
        return (
            <div id="cont" className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 mx-auto mt-4">
                        <Flip bottom big>
                            <p className="display-3 text-dark pb-0 mb-0" id="ProjectsTitle">Projects</p>
                            <br />
                        </Flip>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;