import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'kraken';
  isLoading: boolean = true;
  ngOnInit(): void {
    initFlowbite();

    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  }
}
