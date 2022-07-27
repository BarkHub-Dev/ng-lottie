import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, PLATFORM_ID, Inject, AfterViewInit } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { AnimationConfigWithData, AnimationConfigWithPath, default as lottie } from 'lottie-web';

@Component({
    selector: 'lottie-animation-view',
    template: `<div #lottie
                    [style.width]="viewWidth"
                    [style.height]="viewHeight"
                    [style.overflow]="'hidden'"
                    [style.margin]="'0 auto'"
                   >
               </div>`
})

export class LottieAnimationViewComponent implements AfterViewInit {

    constructor(@Inject(PLATFORM_ID) private platformId: string) {}

    @Input() options?: LottieOptions;
    @Input() width?: number;
    @Input() height?: number;

    @Output() animCreated: any = new EventEmitter();

    @ViewChild('lottie') lavContainer?: ElementRef;

    public viewWidth?: string;
    public viewHeight?: string;
    private _options?: AnimationConfigWithPath<"svg"> | AnimationConfigWithData<"svg">;

  ngAfterViewInit(): void {
    // Exit if it is being rendered on the server
    if (isPlatformServer(this.platformId)) {
      return;
    }

    this._options = {
      container: this.lavContainer?.nativeElement,
      loop: this.options?.loop,
      autoplay: this.options?.autoplay,
      path: this.options?.path,
      animationData: this.options?.animationData,

    };

    this.viewWidth = this.width + 'px' || '100%';
    this.viewHeight = this.height + 'px' || '100%';
    // @ts-ignore
    let anim = lottie.loadAnimation(this._options);
    this.animCreated.emit(anim);
  }
}

export interface LottieOptions {
  path?: string;
  renderer?: string;
  autoplay?: boolean;
  loop?: boolean;
  autoloadSegments?: boolean;
  animationData?: any;
  rendererSettings?: 'svg';
}
