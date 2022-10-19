import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { PanelIzquierdoComponent } from '../components/panel-izquierdo/panel-izquierdo.component';
import { MenuBotonComponent } from '../components/menu-boton/menu-boton.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeUserComponent } from '../components/rodape-user/rodape-user.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
    PlayerComponent,
    PanelIzquierdoComponent,
    MenuBotonComponent,
    RodapeUserComponent,
  
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes),
  ]
})
export class PlayerModule { }
