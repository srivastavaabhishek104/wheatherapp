import classes from './Home.module.css';
import React, { Component } from 'react'

class Home extends Component {
	render() {
		return (
			<div className={classes.body}>
				{!this.props.status?<div className={classes.spinner}><div className={classes.loader}></div></div>:null}
				<form onSubmit={(e)=>this.props.getWeather(e)}>
					<h1 className={classes.heading}>Weather App</h1><br></br>
					<span className={classes.city}>City</span>
					<input type='text' name='city' />
					<span className={classes.country}>Country </span>
					<input type='text' name='country'/>
					<br/><br/><br/>
					<button className={classes.button}>Search</button>
				</form>
			</div>
		  )
	}
}
export default Home