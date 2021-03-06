import React, { Component } from 'react';
import '../../styles/CityPopup.css';
const { cities } = require('./cities.json');

class CityPopup extends Component {

  handleClick = city => {
    this.props.updateValues(city);
    this.props.fetchHomesCity(this.props.queryParameters);
  }

  render() {
    const className = cities.length > 5 ? 'CityPopup CityPopupLong' : 'CityPopup';
    const cityList = cities.sort((a,b) => a.name > b.name ? 1 : -1 ).map((city, i) => (
      <div
        key = {i}
        className = 'City'
        onClick={() => this.handleClick(city)}
      >
        {city.name}
      </div>
    ));
    return (
      <div className={className}>
       {cityList}
      </div>
    );
  }
}

export default CityPopup;