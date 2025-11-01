import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-color',
  templateUrl: './button-color.component.html',
  styleUrl: './button-color.component.scss'
})
export class ButtonColorComponent {
  @Input({required:true, alias:'buttonColor'}) buttonColor: string = "blue"
  @Input({required: true, alias:'inputText'}) inputText: string = "Azul"
  @Input('fontColor') fontColor: string = "white"
}
