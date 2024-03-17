import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent{

  currentIndex = 0;
  private touchStartY: number;

  images: string[] = ['assets/img/img1.jpg','assets/img/img2.jpg','assets/img/img3.jpg','assets/img/img4.jpg','assets/img/img5.jpg',]; // Replace with your image paths

  scrollToNextImage(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.scrollUp();
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchEnd(event: TouchEvent) {
    const touchEndY = event.changedTouches[0].clientY;
    if (touchEndY < this.touchStartY) {
      this.scrollUp();
    }
  }

  private scrollUp() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first image
    }
  }

}
