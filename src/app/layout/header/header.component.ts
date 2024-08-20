import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  link: string = 'https://kr20.freekraken.com/';
  linkRegister: string = 'https://kr20.freekraken.com/register';
}
