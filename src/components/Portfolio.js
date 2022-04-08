import React from 'react';
import projects from "../data/Projects";
import Toolbar from "./Toolbar";
import ProjectList from './ProjectList'

export default class Portfolio extends React.Component {

  state = {
    selected: ["All"],
    projects: projects
  }

  filters = ["All", "Websites", "Flayers", "Business Cards"];

  onFilterToggle = item => {
    const filter = item.target.innerText;
    const portfolio = filter === 'All' ? projects : projects.filter(item => item.category === filter);
    this.setState({selected: filter, projects: portfolio})
  }

  render () {
    const {selected, projects} = this.state;
    return (
      <div className="main-content">
        <Toolbar
          filters={this.filters}
          selected={selected}
          onSelectFilter={this.onFilterToggle}/>
          <ProjectList props={projects} />
      </div>
    )
  }
}
