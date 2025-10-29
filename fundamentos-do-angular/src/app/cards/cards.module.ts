import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { CardRoxoComponent } from '../components/card-roxo/card-roxo.component';
import { CardButtonComponent } from '../components/card-button/card-button.component';
import { CardRoxoButtonComponent } from '../components/card-roxo-button/card-roxo-button.component';


@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent
  ]
})
export class CardsModule { }
