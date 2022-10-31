import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './containers/Sample';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
import { useEffect, useState } from "react";
import Header from './components/Header';
import Card from './components/Card'

// Put your API key here
builder.init('fb744a96576b4a789d407441ae297d2c')

function App() {
  useEffect(() => {
    // registering custom components
    Builder.registerComponent(Card, {
      name: 'Custom Card',
      inputs: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'image', type: 'file' },
        { name: 'imageAlt', type: 'string' }
      ]
      // image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
    })

  }, []);

  return (
    <div className="App">
      <div className='cardSection'>
        <Sample />
      </div>
    </div>
  );
}

export default App;
