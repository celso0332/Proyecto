import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad {
  constructor(private router: Router, private spotifyService:SpotifyService){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  const token=localStorage.getItem('token');
  if(!token){
   return this.notAuthenticate();
  }

  return new Promise(async(res)=>{
      const usuarioCreado=await this.spotifyService.inicializarUsuario();
      if(usuarioCreado)
        res(true)
      else
        res(this.notAuthenticate());
    })
  }

  notAuthenticate(){
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
}
