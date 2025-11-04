import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fundamentos-do-angular';
  colorUserName: string = '';
  parentBackground = '';

  alterColorUserName() {
    this.colorUserName = 'blue';
    console.log('alterou' + this.colorUserName)
  }

   onBackground(eventValue: string) {
    console.log('recebido no pai:', eventValue);
    // faça o que precisar com o valor, por exemplo setar uma variável para passar ao card
    this.parentBackground = eventValue;
  }

  passei(event: string){
    this.parentBackground = event
    console.log("consegui passar " + event)
  }
}
