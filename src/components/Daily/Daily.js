import React,{Component} from 'react'
import classes from './Daily.module.css';
import cloudy from '../../assets/images/cloudy.png'
import rainy from '../../assets/images/rainy.png'
import clear from '../../assets/images/clear.png'
var date;
class Daily extends Component {
	render() {
		if(!this.props.status){
			this.props.history.push('/')
		} else {
			var image = this.props.location.state.state[0].weather[0].main
			date = this.props.location.state.state[0].dt_txt.substring(0,10)
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
			var newArr = this.props.location.state.state.map((element ,index)=> {	
				const time = element.dt_txt.substring(11,16)
				if(index%2===0) {
					return(
						<tr key={index}>
							<td className={classes.td}>{time}</td>
							<td className={classes.td}>{element.main.temp} &#x2103;</td>
						</tr>
					);
				} else {
					return( 
						<tr key={index}>
							<td className={classes.td2}>{time}</td>
							<td className={classes.td2}>{element.main.temp} &#x2103;</td>
						</tr>
					);
				}
			});
	  	}
		return (
			<div className={classes.body}>
			  	<h1 className={classes.heading}>Hourly Reports</h1>
			  	<h5 className={classes.date}>Date : {date}</h5>
			  	<img className={classes.img} src={conditionImage} alt='imagee'/>
				<table>
					<tbody>
						<tr>      
							<td style={{fontSize:'20px',fontWeight:'bold'}}>Time (Hr)</td>
							<td style={{fontSize:'20px',fontWeight:'bold'}}>Temperature (&#x2103;)</td>
						</tr>
						{newArr}
					</tbody>
				</table>
			  	<button className={classes.button} onClick={()=>{this.props.history.push('/')}}>Back</button>
			</div>
		);
	}
}

export default Daily;

