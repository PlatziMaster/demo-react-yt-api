import React, { useEffect } from 'react';
import '../styles/components/App.styl';

const App = () => {

  useEffect(() => {
    loadYoutubeApi();
  }, []);

  const loadYoutubeApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";

    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey('');
        gapi.client.load('youtube', 'v3', () => {
          console.log('load');
        });
      });
    };

    document.body.appendChild(script);
  }

  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
};

export default App;
