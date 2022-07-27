import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<lottie-animation-view [options]="options" [width]="250" [height]="250"></lottie-animation-view>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = {
    path: 'https://assets6.lottiefiles.com/packages/lf20_ApoETF.json',
    loop: false,
    autoplay: true
  }
}
