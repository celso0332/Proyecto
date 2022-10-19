import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from 'src/app/services/spotify.service';
import { IPlaylist } from '../../../interfaces/IPlaylist';

@Component({
  selector: 'app-panel-izquierdo',
  templateUrl: './panel-izquierdo.component.html',
  styleUrls: ['./panel-izquierdo.component.scss']
})
export class PanelIzquierdoComponent implements OnInit {
playlists:IPlaylist[]=[];
menuSeleccionado='Home';
homeIcon=faHome;
busquedaIcon=faSearch;
artistaIcon=faGuitar;
playlistIcon=faMusic;


constructor(private router:Router, private spotifyService:SpotifyService) { }

ngOnInit(): void {
  this.searchPlaylist()
}


  botonClick(boton:string){
  this.menuSeleccionado=boton;
  this.router.navigateByUrl('player/home')
}

async searchPlaylist(){
this.playlists= await this.spotifyService.buscarPlaylistUser();
console.log(this.playlists)
}


}
