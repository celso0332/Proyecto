export const environment = {
  production:true
};
export const SpotifyConfiguration={
  clientId:'cd0258721b0443f1a44cb62735e38089',
  authEndpoint:'https://accounts.spotify.com/authorize',
  redirectUrl:'http://localhost:4200/login/',
  scopes:[
    "user-read-currently-playing",//reproductor de música
    "user-read-recently-played",  //canciones reproducidas recientemente
    "user-read-playback-state",   //estado de reproductor de usuario
    "user-top-read",              //top artistas y canciones de usuario
    "user-modify-playback-state", //modificar el estado del reproductor del usaurio
    "user-library-read",          //ver la biblioteca de los usuarios
    "playlist-read-private",      //ver playlist privadas
    "playlist-read-collaborative"   //ver listas collaborativas  

  ]
}
