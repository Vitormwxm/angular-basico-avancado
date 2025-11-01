import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-avatar',
  templateUrl: './card-avatar.component.html',
  styleUrl: './card-avatar.component.scss'
})
export class CardAvatarComponent {

  @Input('colorUserName') colorUserName: String = '';
}
