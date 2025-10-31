import { Component } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.scss'
})
export class CardUserComponent {
  perfilUser = "./assets/logo.png";
  userName: string = "padrao";
  inputValue = "teste";
  attrBiding = "teste"

  alterUserName() {
    this.userName = "Novo"
    this.attrBiding = "Teste diferenciado"
  }

  handleInputkeyUp(event: KeyboardEvent) {
    const currentTarget = (event.target as HTMLInputElement)
    console.log(currentTarget.value)
  }
  
}
