// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
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
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
