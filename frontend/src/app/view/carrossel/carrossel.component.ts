import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent {

  constructor() { }

  public slideIndex = 1;

  ngAfterViewChecked() {
    this.mostrarSlides(this.slideIndex);
  }

  public mudarSlide(n: number) {
    this.mostrarSlides(this.slideIndex += n);
  }

  public atual(n: number) {
    this.mostrarSlides(this.slideIndex = n);
  }

  public mostrarSlides(n: number) {
    let i;
    let slides = document.getElementsByClassName("evento") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex - 1].style.display = "block";
  }


}
