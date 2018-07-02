import React from 'react';
import {Link} from 'react-router-dom';
import {Treebeard, decorators} from 'react-treebeard';

const data = {
    name: 'Hoang Nguyen',
    toggled: true,
    children: [
        {
            name: "About Me",
            toggled: true,
            children: [
                { name: 'Resume.pdf' }
            ]
        },
        {
            name: 'Work',
            toggled: true,
            children: [
                { name: 'Biome Tool.ts' },
            ]
        },
        {
            name: 'Personal Projects',
            toggled: true,
            children: [
                { name: 'Minecraft Clone.cpp' },
                { name: 'Deferred Rendering.js' },
                { name: 'Deferred Rendering.cpp' },
                { name: 'Terrain Generation.cpp' },
                { name: 'City Generation.cpp' },
                { name: 'Cloth Simulation.cpp' },
                { name: 'Shader Effects.cpp' },  
                { name: 'Human vs Alien.cpp' }                                                                                                                                                                    
            ]
        },
        {
            name: 'Team Projects',
            toggled: true,
            children: [
                { name: 'Inua.ue' },
                { name: 'Battle of the Banderas.ue' },
                { name: 'Fists of Freedom.unity' }
            ]
        }
    ]
};

decorators.Header = ({style, node}) => {
    let iconType = node.children ? 'folder' : 'file-text';
    let iconClass = 'fas fa-folder';
    let iconStyle = { 
        marginRight: '5px',
        color: 'rgb(204,204,204)'
    };

    let newTitleStyle = {
        lineHeight : "24px",
        verticalAlign : "middle",
        color: 'rgb(204,204,204)',
        fontSize: '14.5px'
    };
 
    if(iconType == 'file-text') {
        iconStyle.marginLeft = '12px';
        let fileExtension = node.name.split('.').pop();
        if(fileExtension == 'js') {
            iconClass = 'fab fa-js-square';
            iconStyle.color = 'yellow';            
        }
        else if(fileExtension == 'cpp') {
            iconClass = 'fab fa-cuttlefish';
            iconStyle.color = 'rgb(81,154,186)';            
        }
        else if(fileExtension == 'ts') {
            iconClass = 'fab fa-angular';
            iconStyle.color = 'red';
        }
        else if(fileExtension == 'pdf') {
            iconClass = 'far fa-file-pdf';
            iconStyle.color = 'red';            
        }
        else if(fileExtension == 'ue' || fileExtension == 'unity') {
            iconClass = 'fas fa-underline';
            iconStyle.color = 'white';                        
        }
    }

    return (
        <div style={style.base}>
            <div style={newTitleStyle}>
                <i className={iconClass} style={iconStyle}/>
                    {node.name}
            </div>
        </div>
    );
};

class Navigation extends React.Component {
  constructor(props){
      super(props);
      this.state = {};
      this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled){
      console.log(node);
      if(this.state.cursor){this.state.cursor.active = false;}
      node.active = true;
      if(node.children){ node.toggled = toggled; }
      this.setState({ cursor: node });
      this.props.getNodeItem(node);
  }

  render(){
      return (
          <div className="tree-view">
            <Treebeard data={data}
                       decorators={decorators}                
                       onToggle={this.onToggle}/>
          </div>
      );
  }
}

export default Navigation;