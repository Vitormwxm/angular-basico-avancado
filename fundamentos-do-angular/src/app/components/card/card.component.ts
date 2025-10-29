import { Component } from '@angular/core';
import { info } from 'node:console';


interface Iplano {
  info: Iinfo
}

interface Iinfo {
  tipo: string
  preco: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  
    planos: Iplano = {
      info: {
        tipo: "teste",
        preco: 100
      }
    };

  getFullPriceMessage() {

    console.log("changeDetection")
    
  }

  teste() {
    
  }
}
