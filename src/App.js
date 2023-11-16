import './App.css';
import React, { useEffect, useRef } from 'react';
import Sound from './assets/messenger.mp3';
import { Howl } from 'howler';
const mobilenetModule = require('@tensorflow-models/mobilenet');
const knnClassifier = require('@tensorflow-models/knn-classifier');

// var sound = new Howl({
//   src: [Sound]
// });

// sound.play();

function App() {
  // const videoRef = useRef();

  // const init = async () => {
  //   await setupCamera();
  //   console.log('setup camera successfully');
  // };

  // const setupCamera = () => {
  //   return new Promise((resolve, reject) => {
  //     navigator.getUserMedia = navigator.getUserMedia || 
  //     navigator.webkitGetUserMedia ||
  //     navigator.mozGetUserMedia ||
  //     navigator.msGetUserMedia;
  //     if (navigator.getUserMedia) {
  //       navigator.getUserMedia(
  //         { video: true },
  //         stream => {
  //           videoRef.current.srcObject = stream;
  //           videoRef.current.addEventListener('loadeddata', resolve)
  //         },
  //         error => reject(error)
  //       );
  //     } else {
  //       reject();
  //     }
  //   });
  // };

  // useEffect(() => {
  //   init();

  //   return () => {

  //   }
  // },[]);

  return (
    <div className="main">
      <h1>Do not touch your face</h1>
      <video className='video' />
      <div>
        <button className='btn'>Style 1</button>
        <button className='btn'>Style 2</button>
        <button className='btn'>Run</button>
      </div>
    </div>
  );
}

export default App;
