import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  link: string = 'https://kr13.freekraken.com/';
  linkRegister: string = 'https://kr13.freekraken.com/register';
}
