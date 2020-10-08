import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'; 
import './App.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
 apiKey: '7c0f472d3c894cc5b83d2fec7323f4e3'
});

const ParticlesOptions={
   particles: {
                number:{
                  value: 30,
                  density:{
                    enable:true,
                    value_area: 800
                  } 
                }
              }
}
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:''
    }
    }
  

  onInputChange= (event) =>{
    this.setState({input: event.target.value});

  }

onButtonSubmit= ()=>{
  this.setState({imageUrl: this.state.input})
  app.models.predict(Clarifai.COLOR_MODEL,
                      this.state.input).then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
}

  

  render() {
    return (
      <div className="App">
        <Particles className='particlescss' 
              params={ParticlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
