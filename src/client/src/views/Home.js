import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {
  render() {
    const {
      picture,
      title,
      size,
      price,
    } = this.props;
    return (
      <div className='Home'>
        <div className='HomePicture' style={{ backgroundImage: `url(${picture})`}}>
        </div>
        <div className='HomeInfo'>
          <div className='HomeTitle'>
            <h3 style={{backgroundColor:'red'}}>{title}</h3>
          </div>
          <div className='HomeDetails'>
            <h3 style={{backgroundColor:'red'}}>${price}</h3>
            <p style={{backgroundColor:'red'}}>{size} m2</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
