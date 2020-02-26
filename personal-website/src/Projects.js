import React from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import './CurrentProjects.css';

class Projects extends React.Component {

    constructor() {
        super();
        this.state = {
            repoData: [],
        }
    }

    getRepositories() {
        axios({
            method: 'get',
            url: 'https://api.github.com/users/eBork1/repos',
            responseType: 'json',
            params: {
                sort: 'updated',
                direction: 'desc',
            }
        })
            .then(response => {
                this.setState({
                    repoData: response.data,
                });
            });
    }

    componentDidMount() {
        this.getRepositories();
    }

    render() {
        return (
            <div id="cont" className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 mx-auto mt-4">
                        <Flip bottom big>
                            <p className="display-3 text-dark" id="ProjectsTitle">Projects</p>
                            <p>My most recently updated repositories on <a href="https://github.com/eBork1?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                            <br />
                        </Flip>
                    </div>
                </div>
                <div className="row">
                    <Fade bottom>
                        <div className="col-sm-12 col-lg-8 mx-auto mt-4 mb-5 p-0 border" id="repoList">
                            {this.state.repoData.map((repo, idx) => {
                                return (
                                    <div key={idx} className="text-left pl-3 shadow-sm m-2">
                                        <h4 className="font-weight-bold">{repo.name}</h4>
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><p>{repo.html_url}</p></a>
                                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer"><p>{repo.homepage}</p></a>
                                        <p>Created: {repo.created_at.slice(0,10)}</p>
                                        <p>Updated: {repo.updated_at.slice(0,10)}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </Fade>
                </div>

            </div>
        )
    }
}
export default Projects;