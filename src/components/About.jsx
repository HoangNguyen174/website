import React from 'react';
import 'styles/base/_about.sass';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.goToLink = this.goToLink.bind(this);
  }

  goToLink() {
    window.open("https://www.linkedin.com/in/hoang-nguyen-9a7b588b/", '_blank');
  }

  render() {
    return ( 
      <div className='about'>
        <div className="resume-title-1">
          Contact
        </div>
        <div className="resume-list">
          <ul>
            <li>
              Phone: 469-616-5428
            </li>
            <li>
              Email: hnguyen.programmer@gmail.com
            </li>
            <li>
              LinkedIn: <i class="fab fa-linkedin" onClick={this.goToLink}></i>
            </li>
          </ul>
        </div>
        <div className="resume-title-1">
          Work Experience
        </div>
        <div className="resume-title-2">
          Full-Stack Developer - Nerd Kingdom Inc - Irving, Dallas (May 2016 - Dec 2017)
        </div>
        <div className="resume-list">
          <ul>
            <li>
              Implementing tools using front-end web frameworks: Angular 1.x/2.x, Backbone, Node and Electron
            </li>
            <li>
              Creating build process using Grunt, Gulp, and Webpack
            </li>
            <li>
              Designing UI using HTML5/CSS, Bootstrap, SemanticUI and Angular Material
            </li>
            <li>
              Writing C++ code exposing engine functions for tool scripting
            </li>
            <li>
              Collaborating with engine team and gameplay team to design and implement tools
            </li>
            <li>
              Bugs fixing and testing on daily basis
            </li>
          </ul>
        </div>
        <div className="resume-title-1">
          Education
        </div>
        <div className="resume-title-2">
          SMU Guildhall, TX (January 2014 - December 2015)
        </div>
        <div className="resume-list">
          <ul>
              <li>
                Master of Interactice Technology, Digital Game Development
              </li>
          </ul>
        </div>
        <div className="resume-title-2">
          Texas A&M University of Corpus Christi, TX (August 2008 - July 2013)
        </div>
        <div class="resume-list">
          <ul>
              <li>
                Bachelor of Science: Double Major in Computer Science and Mathematics
              </li>
          </ul>
        </div>
        <div className="resume-title-1">
          Technical Skills
        </div>
        <div className="resume-list">
          <ul>
              <li>
                Programming/Scripting Languages: <span> C++ - JavaScript - TypeScript - CoffeScript - HTML5/CSS </span>
              </li>
              <li>
                Front-end APIs: <span> Angular 1.x/2.x - Backbone.js - React - jQuery - Electron </span>
              </li>
              <li>
                Front-end Graphics APIs: <span> OpenGL - GLSL - WebGL - Three.js - Pixi.js </span>
              </li>
              <li>
                Back-end APIs: <span> Node - Express - MySQL - ORM </span>
              </li>
              <li>
                Tools: <span> Perforce - GIT - Gulp - Webpack - Handlebars - Immutable.js - Lodash - Underscore - Nightmare.js - Less/Sass </span>
              </li>
              <li>
                Programming Skills:  <span> Engine Programming - Tool Programming - Front-end Programming - Graphics Programming - AI Programming </span>
              </li>
              <li>
                Engine Experience: <span> Unreal Engine 4 - Unity 2D </span>
              </li>
          </ul>
        </div>
    </div>
    );
  }
}

export default About;