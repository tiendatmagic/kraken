import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  link: string = 'https://kr15.freekraken.com/';
  linkRegister: string = 'https://kr15.freekraken.com/register';
}
