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
  color = "none"

  alterUserName() {
    this.userName = "Novo"
    this.attrBiding = "Teste diferenciado"

    const currentTarget = document.querySelector('#meu-input')?.innerHTML

    if(currentTarget == '') {
        this.color = "red"
        console.log("alterou para " + this.color)
    } 
    
  }

  handleInputkeyUp(event: KeyboardEvent) {
    const currentTarget = (event.target as HTMLInputElement)

    if(currentTarget.value != '') {
      this.color = "white"
      console.log("entrou" + this.color)
    } 
    console.log(currentTarget.value)
  }
  
}
