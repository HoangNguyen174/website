import React from 'react';
import YouTube from 'react-youtube';
import 'styles/base/_page-content.sass';
import Projects from '../data/project-data.js';
import { Link } from 'react-router-dom';
import About from './About';

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.goToLink = this.goToLink.bind(this);
        this.createImagesTable = this.createImagesTable.bind(this);
    }

    goToLink() {
        let currentProject = Projects.get(this.props.nodeItem.name);
        let link = currentProject.repo || currentProject.demoLink;
        window.open(link, '_blank');
    }

    createImagesTable() {
        let currentProject = Projects.get(this.props.nodeItem.name);
        let table = [];
        let images = currentProject.images;

        if(!images) {
            return (<div></div>);
        }

        let row = 3;
        let column = images.length / row;
        
        // Outer loop to create parent
        for (let i = 0; i < row; i++) {
          let children = [];
          //Inner loop to create children
          for (let j = 0; j < column; j++) {
            let index = j + i * 2;
            children.push(<td> <img src={images[index]}/> </td>);
          }
          //Create the parent and add the children
          table.push(<tr>{children}</tr>);
        }
    return (<table>{table}</table>);
    }

    render(){
        let currentProject = null;

 
        if(!this.props.nodeItem) {
            return (<div></div>);
        }

        let tabName = (
            <div className="tab-name">
                {this.props.nodeItem.name}
            </div>
        )

        currentProject = Projects.get(this.props.nodeItem.name);

        if(!currentProject) {
            return (<div></div>);
        }

        const videoOpt = {
            height: '600',
            width: '800'
        };
        
        let pageContent = (
            <div className="page-content">
                <div className="tab-container">
                    {tabName}
                </div>
                <div className="content">
                    { currentProject.name == 'Resume.pdf' && 
                        <About/>
                    }
                    { currentProject.features &&
                        <div className="project-description">
                            { currentProject.repo && 
                                <div className="repo-link fab fa-github-square fa-3x" onClick={this.goToLink}>
                                </div>
                            } 
                            <div className="features">
                                <div> {currentProject.features}</div>
                            </div>
                            <div className="tech">
                                <div> {currentProject.tech}</div>
                            </div>
                            { currentProject.demoLink && 
                                <iframe src={currentProject.demoLink}></iframe>
                            }
                        </div>
                    }
                    { this.createImagesTable() }
                    { currentProject.videoId &&
                        <div className="demo-video">
                                <YouTube
                                    videoId={currentProject.videoId}
                                    opts={videoOpt}/>
                        </div>
                    }

                </div>
            </div>
        );
        return pageContent;
    }
}
  
export default Content;