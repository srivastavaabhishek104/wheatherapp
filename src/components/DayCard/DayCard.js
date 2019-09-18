import React,{Component} from 'react'
import classes from './DayCard.module.css';
import cloudy from '../../assets/images/cloudy.png'
import rainy from '../../assets/images/rainy.png'
import clear from '../../assets/images/clear.png'
class DayCard extends Component {

	render(){
	
		var high;
		var low;
		var date;
		var image;
		
		if(this.props.loaded){
			image = this.props.data[0].weather[0].main
			high = Math.round(this.props.data[0].main.temp_max)
			low = Math.round(this.props.data[0].main.temp_min)
			date = this.props.data[0].dt_txt.substring(0,10);
		}
		
		var conditionImage;
		
		if(image==='Clouds'){
			conditionImage=cloudy
		}
		else if(image==='Rain'){
			conditionImage=rainy
		}
		else if(image==='Clear'){
			conditionImage=clear
		}
		
		return (
			<div 
				className={classes.body} 
				onClick={()=>this.props.history.push('/daily', {state:this.props.data})}
			>
				<h4>{this.props.name}</h4>
				<img src={conditionImage} alt='display'/>
				<p>{image}</p>
				<p>{date}</p>
				<p>High : {high} &#x2103; </p>
				<p>Low : {low} &#x2103;</p>
			</div>
		)
	}
}

export default DayCard
