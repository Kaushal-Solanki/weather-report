import React, { Component } from 'react'

class Wheater extends Component {
  render() {
    const { city, country, temp, humidity, desc, error } = this.props
    return (
      <div className='weather__info'>

        {
          city && country && <p className='weather_key'>Location: <span>{city}, {country}</span></p>
        }
        {
          temp && <p className='weather_key'>Temperature: <span>{temp}</span></p>
        }
        {
          humidity && <p className='weather_key'>Humidity:<span>{humidity}</span></p>
        }

        {
          desc && <p className='weather_key'>Description: <span>{desc}</span></p>
        }

        {
          error && <p className='weather_key'>Error:<span>{error}</span></p>
        }



      </div>
    )
  }
}

export default Wheater