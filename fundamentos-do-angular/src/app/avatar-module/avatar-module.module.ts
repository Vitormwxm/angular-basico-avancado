import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAvatarComponent } from '../components/avatar/card-avatar/card-avatar.component';



@NgModule({
  declarations: [
    CardAvatarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [CardAvatarComponent] 
})
export class AvatarModuleModule { }
