import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-boton',
  templateUrl: './menu-boton.component.html',
  styleUrls: ['./menu-boton.component.scss']
})
export class MenuBotonComponent implements OnInit {
@Input()
  descripcion=""

@Input()
seleccionado=false
  constructor() { }

@Output()
click=new EventEmitter<void>();
  ngOnInit(): void {
  }
onClick(){
  this.click.emit();
}
}
