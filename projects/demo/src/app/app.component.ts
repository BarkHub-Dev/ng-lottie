import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = {
    path: 'https://assets6.lottiefiles.com/packages/lf20_ApoETF.json',
    loop: false,
    autoplay: true
  }
}
