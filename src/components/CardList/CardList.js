import React, { Component } from 'react'
import DayCard from '../DayCard/DayCard';
import classes from './CardList.module.css';

class CardList extends Component {

  render() {
    return (
      <div className={classes.body} style={{marginTop:'80px'}}>
        <DayCard name={this.props.dayArray[0]} {...this.props} loaded={this.props.loaded} data={this.props.weatherdata[this.props.dayArray[0]]}/>
        <DayCard name={this.props.dayArray[1]} {...this.props} loaded={this.props.loaded} data={this.props.weatherdata[this.props.dayArray[1]]}/>
        <DayCard name={this.props.dayArray[2]} {...this.props} loaded={this.props.loaded} data={this.props.weatherdata[this.props.dayArray[2]]}/>
        <DayCard name={this.props.dayArray[3]} {...this.props} loaded={this.props.loaded} data={this.props.weatherdata[this.props.dayArray[3]]}/>
        <DayCard name={this.props.dayArray[4]} {...this.props} loaded={this.props.loaded} data={this.props.weatherdata[this.props.dayArray[4]]}/>
        <DayCard name={this.props.dayArray[5]} {...this.props} loaded={this.props.loaded} data={this.props.weatherdata[this.props.dayArray[5]]}/>
      </div>
    )
  }
}

export default CardList