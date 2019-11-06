import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/header';
import Showcase from './Components/Showcase/showcase';
import Info from './Components/JustInfo/info';
import Footer from './Components/Footer/footer';

class App extends Component {
  render() {
    return (
        <div className='App'>
          <Header name='Jynbash' secondItem='How It Works' thirdItem='Discover Project' />
          <Showcase title='Intellectual Property has the Shelf Life' btn='Go' img='https://cdn.shopify.com/s/files/1/2829/0660/files/Silverbell-Ranch-Front-Rendering-SLIDER_1400x.jpg?v=1569335143'/>
          <Info title='OUR WORK IS THE PRESENTATION' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Maiores esse doloremque, magni a reprehenderit odio.'
          secondText='Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
          <Footer text='Copyright © 2001 - 2014 Cssauthor.com' />
        </div>
  );
  }
}

export default App;
