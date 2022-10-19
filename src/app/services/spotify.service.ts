import { splitNsName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUsuario } from '../interfaces/IUsuario';
import { SpotifyPlaylistForPlaylist, SpotifyUserForUser } from '../common/spotifyHelper';
import { Router } from '@angular/router';
import { IPlaylist } from '../interfaces/IPlaylist';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
spotifyApi:Spotify.SpotifyWebApiJs=null;
usuario:IUsuario;


  constructor(private router:Router) { 
    this.spotifyApi=new Spotify();
  }

  async inicializarUsuario(){
    if(!!this.usuario)
      return true;
      
    const token=localStorage.getItem('token')

    if(!token)
      return false;
    
    try {
    
      this.defineAccesToken(token);
      await this.getUsuario();
      return !!this.usuario;
    
    } catch (ex) {
      return false;
    }
  }

  async getUsuario(){
    const usuarioInfo=await this.spotifyApi.getMe();
    
    this.usuario=SpotifyUserForUser(usuarioInfo);
   
  }

  getUrlLogin(){
    const authEndPoint =`${SpotifyConfiguration.authEndpoint}?`;
    const clientId=`client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl=`redirect_uri=${SpotifyConfiguration.redirectUrl}&`
    const scopes=`scope =${SpotifyConfiguration.scopes.join('20%')}&`;
    const responseType=`response_type=token&show_dialog=true`
    return authEndPoint+clientId+redirectUrl+scopes+responseType;
  }

  getTokenUrlCallBack(){
    if(!window.location.hash)
    return '';

    const params = window.location.href.substring(1).split('&');
    return params[0].split('=')[1];
  }

  defineAccesToken(token:string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    
  }
  async buscarPlaylistUser(offset=0,limit=50):Promise<IPlaylist[]>{
  const playlists=await this.spotifyApi.getUserPlaylists(this.usuario.id,{offset, limit});
 console.log(playlists)
  return playlists.items.map(SpotifyPlaylistForPlaylist)
}
exit(){
  localStorage.clear();
  this.router.navigate(['/login']);
}
}
