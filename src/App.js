import React,{Component} from 'react';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import CardList from './components/CardList/CardList'
import Daily from './components/Daily/Daily';
import Home from './components/Home/Home';

var today = new Date();
var d = String(today.getDate()).padStart(2, '0');
var dd = parseInt(d)
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday",
 "saturday" ,"sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
var yyyy = today.getFullYear();

var dateArray = []
for(let i=0;i<6;i++){
    dateArray[i] = yyyy+ '-' + mm + '-' +(dd+i);
}

var dayArray = []
for(let i=0;i<6;i++){
    dayArray[i] = days[today.getDay()+i]
}
const API_KEY = "9f28f6fbe59b03d48021e6800ae89cb7"
var data ;

class App extends Component{

  	state={
    	weatherdata: {
			wednesday:[],
			thursday:[],
			friday:[],
			saturday:[],
			sunday:[],
			monday:[], 
			tuesday:[],
		},
		error:"",
		loaded:false,
		dayArray: dayArray,
		dateArray:dateArray
	}

  	getWeather = async (e)=>{

		this.setState({
			loaded:false
		});

		var city='Delhi';
		var country='in';

		if(e !=='10'){
			e.preventDefault();
			if(e.target.city.value !== "" && e.target.country.value !== "") {
				city = e.target.city.value
				country = e.target.country.value
			} else {
				alert('Enter the city and country');
			}
		}
    
		const api_call =  await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${API_KEY}`).catch(()=>console.log('error'))
		data = await api_call.json();
		console.log(data)
		var weatherdata = {
			wednesday:[],
			thursday:[],
			friday:[],
			saturday:[],
			sunday:[],
			monday:[], 
			tuesday:[],
		}
   

    	data.list.forEach(element => {
        	var date = element.dt_txt.substring(0,10)

			if(date===dateArray[0]){
				weatherdata[dayArray[0]] = weatherdata[dayArray[0]].concat(element);
			}
			else if(date===dateArray[1]){
				weatherdata[dayArray[1]] = weatherdata[dayArray[1]].concat(element)
			}
			else if(date===dateArray[2]){
				weatherdata[dayArray[2]] = weatherdata[dayArray[2]].concat(element)
			}
			else if(date===dateArray[3]){
				weatherdata[dayArray[3]] = weatherdata[dayArray[3]].concat(element)
			}
			else if(date===dateArray[4]){
				weatherdata[dayArray[4]] = weatherdata[dayArray[4]].concat(element)
			}
			else if(date===dateArray[5]){
				weatherdata[dayArray[5]] = weatherdata[dayArray[5]].concat(element)
			}
    	});
    
		this.setState({
			weatherdata: weatherdata,
			loaded:true
		})
	}

	componentDidMount(){
		this.getWeather('10');
	}
  	render() { 
		return(
			<Router>
				<Home status={this.state.loaded} getWeather={this.getWeather}/>
				<Switch>
					<Route path='/' exact render={(props)=><CardList {...props} {...this.state}/>}/>
					<Route path='/daily' exact  render={(props)=><Daily {...props} status={this.state.loaded}/>}/>
				</Switch>
			</Router>
		);
  	}

}

export default App;