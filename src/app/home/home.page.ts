import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CarruselService } from '../services/carrusel.service'; // Servicio del carrusel
import { Carrusel } from '../interfaces/carrusel.interface';   // Interfaz Carrusel
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  carruseles: Carrusel[] = [];  // Almacena las imágenes del carrusel

  constructor(private carruselService: CarruselService) {}


  swiperSlideChanged(e: any){
    console.log("changed: ", e);
  }

  

  ngOnInit() {
    this.loadCarruselImages(); // Llama al servicio para cargar las imágenes del carrusel
  }

  loadCarruselImages() {
    this.carruselService.findAllCarruseles().subscribe((data: Carrusel[]) => {
      this.carruseles = data; // Asigna los datos recibidos a la variable carruseles
    }, error => {
      console.error('Error al cargar las imágenes del carrusel', error);
    });
  }

  // Método que puedes invocar al cambiar de slide
  
}
