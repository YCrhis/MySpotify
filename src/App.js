import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login'
import Player from './components/player/Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {
  const [{ user, token, playlist }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then(playlist => {
        dispatch({
          type: 'SET_LIST',
          playlist: playlist,
        })
      })

      spotify.getPlaylist('3FxmNV8hZNvd9pB4YLmrAC').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      });

    }


  }, []);

  console.log(user)

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
