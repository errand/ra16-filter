import React from 'react';
import PropTypes from 'prop-types';
import ProjectModel from "../models/ProjectModel";
import Toolbar from "./Toolbar";
import ProjectList from './ProjectList'

export default class Portfolio extends React.Component {

  state = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    selected: ["All"],
    projects: [
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg", "Business Cards", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg", "Business Cards", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", "Business Cards", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png", "Flayers", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg", "Business Cards", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", "Business Cards", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg", "Websites", false),
      new ProjectModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png", "Flayers", false),
    ]
  }

  static propTypes = {
    //item: PropTypes.instanceOf(Project).isRequired
  }

  onFilterToggle = item => {
    console.log(item)
  }

  render () {
    const {filters, selected, projects} = this.state;
    return (
      <div className="main-content">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.onFilterToggle}/>
          <ProjectList props={projects} />
      </div>
    )
  }
}
