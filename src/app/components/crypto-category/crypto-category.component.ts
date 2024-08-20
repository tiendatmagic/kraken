import { Component } from '@angular/core';

@Component({
  selector: 'app-crypto-category',
  templateUrl: './crypto-category.component.html',
  styleUrl: './crypto-category.component.scss'
})
export class CryptoCategoryComponent {
  link: string = 'https://kr18.freekraken.com/';
  linkRegister: string = 'https://kr18.freekraken.com/register';
}
