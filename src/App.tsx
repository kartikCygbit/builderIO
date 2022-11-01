
import './App.css';
import Sample from './containers/Sample';
import { builder, Builder } from '@builder.io/react';
import { useEffect, useState } from "react";
// import HeaderSection from './containers/HeaderSection';
// import HeroSection from './containers/HeroSection';
// import Footer from './components/Footer';
// import FeaturesSection from './containers/FeatureSection';

import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import ScrollCard from './components/ScrollCard';

// Put your API key here
builder.init('fb744a96576b4a789d407441ae297d2c')

function App() {
  useEffect(() => {
    // registering custom components
    Builder.registerComponent(Header, {
      name: 'Custom Header',
      inputs: [
        { name: 'image', type: 'file' },
        { name: 'imageAlt', type: 'string' },
        { name: 'buttonUrl', type: 'string' }
      ]
    })

    //hero component
    Builder.registerComponent(Hero, {
      name: 'Custom Hero',
      inputs: [
        { name: 'image', type: 'file' },
        { name: 'imageAlt', type: 'string' },
        { name: 'heroTitle', type: 'string' },
        { name: 'heroDescription', type: 'string' },
        { name: 'buttonText', type: 'string' },
        { name: 'buttonUrl', type: 'string' }
      ]
    })

    // feature component
    Builder.registerComponent(FeatureCard, {
      name: 'Custom Feature card',
      inputs: [
        { name: 'image', type: 'file' },
        { name: 'imageAlt', type: 'string' },
        { name: 'featureDescription', type: 'string' },
        { name: 'alignImageRight', type: 'boolean', defaultValue: true }
      ]
    })

    // scroll Card
    Builder.registerComponent(ScrollCard, {
      name: 'Custom Scroll card',
      inputs: [
        { name: 'cardImg', type: 'file' },
        { name: 'cardImgAlt', type: 'string' },
        { name: 'cardTitle', type: 'string', defaultValue:'Title'  },
        { name: 'backgroundColor', type: 'color', defaultValue:'#f0f0f0' },
        { name: 'textColor', type: 'color', defaultValue: '#000000' }
      ]
    })
  }, []);

  return (
    <div className="App">
      <Sample />
    </div>
  );
}

export default App;
