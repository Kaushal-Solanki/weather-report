import React, { Component } from 'react';
import './App.css';
import Title from './component/titles'
import Form from './component/form'
import Wheater from './component/wheater'
// import { FSWatcher } from 'chokidar';

const API_KEY = "3d17552b0b0d455c244b0425f4d36fbc"

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }


  getWheater = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    if (city && country) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the value'
      })
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                  <Title />
                </div>
                <div className='col-xs-7 form-container'>
                  <Form getWheater={this.getWheater} />
                  <Wheater
                    temp={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    desc={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    );
  }
}

export default App;
