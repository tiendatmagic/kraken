import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  link: string = 'https://kr11.freekraken.com/';
  linkRegister: string = 'https://kr11.freekraken.com/register';
}
