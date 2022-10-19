import { Component, OnInit } from '@angular/core';
import { faSign, faSignOut, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from 'src/app/services/spotify.service';
import { IUsuario } from '../../../interfaces/IUsuario';

@Component({
  selector: 'app-rodape-user',
  templateUrl: './rodape-user.component.html',
  styleUrls: ['./rodape-user.component.scss']
})
export class RodapeUserComponent implements OnInit {
  exitIcon=faSignOutAlt;
  usuario:IUsuario=null;

  constructor(
    private spotify: SpotifyService
  ) { }

  ngOnInit(): void {
  this.usuario=this.spotify.usuario
  }
exit(){
 this.spotify.exit();
}

}
