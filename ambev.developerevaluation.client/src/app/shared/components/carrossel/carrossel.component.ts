import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  standalone: false,
})
export class CarrosselComponent {
  images = [
    'assets/banner-1.png',
    'assets/banner-2.png',
    'assets/banner-3.png',
  ];
  currentImage = 0;
  private interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
  }

  previousImage() {
    this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number) {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.currentImage = index;
    this.ngOnInit();
  }
}
