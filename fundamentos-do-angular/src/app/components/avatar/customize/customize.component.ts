import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrl: './customize.component.scss'
})
export class CustomizeComponent {

  background: string = '';
  @Output('background') backgroundColor =  new EventEmitter<string>();
 
  teste(event: string) {

    if(event == 'Azul') {
      this.background = 'blue'
    } else if ( event == 'Verde') {
      this.background = 'green'
    } else {
      this.background = 'gray'
    }
    

    this.backgroundColor.emit(event);
    console.log("aqui" +  this.background)
  }

  backGroundEmit() {
    this.backgroundColor.emit(this.background)
    console.log("emit " + this.background)
  }
}
