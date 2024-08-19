import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('videoRef', { static: true }) videoRef!: ElementRef

  ngAfterViewInit(): void {
    const media = this.videoRef.nativeElement
    media.muted = true
    media.play()
  }
}
