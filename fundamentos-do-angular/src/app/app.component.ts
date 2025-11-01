import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fundamentos-do-angular';
  colorUserName: string = '';

  alterColorUserName() {
    this.colorUserName = 'blue';
    console.log('alterou' + this.colorUserName)
  }
}
