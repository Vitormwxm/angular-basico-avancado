import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBlackComponent } from '../components/long-card/card-black/card-black.component';



@NgModule({
  declarations: [CardBlackComponent],
  imports: [
    CommonModule
  ],
  exports: [CardBlackComponent]
})
export class LongCardModule { }
