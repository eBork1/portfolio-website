import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Logos from './TechLogos';


class Tech extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 mx-auto mt-4">
                        <Flip bottom big>
                            <p className="display-3 text-light">Tech Stack</p>
                            <br />
                        </Flip>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Fade bottom>
                            <Logos />
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tech;