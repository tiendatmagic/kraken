import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  link: string = 'https://kr11.freekraken.com/';
  linkRegister: string = 'https://kr11.freekraken.com/register';
  @ViewChild('videoRef', { static: true }) videoRef!: ElementRef

  ngAfterViewInit(): void {
    const media = this.videoRef.nativeElement
    media.muted = true
    media.play()
  }
}
