import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  categories: any = [ {code: 1, text: 'Arte clásico' },
                      {code: 2, text: 'Arte moderno' },
                      {code: 3, text: 'Arte contemporáneo' }];
  art: any = [
    { 'category': { 'code': 3, 'text': 'Arte contemporáneo' }, 'title': 'Sotheby’s subasta por primera vez una obra de arte creada con inteligencia artificial', 'text': 'Sotheby\'s saca a subasta, por primera vez, una obra de arte generada por inteligencia artificial dentro del evento de Arte Contemporáneo que tendrá lugar durante la mañana del próximo 6 de marzo en Londres. La pieza, de Mario Klingemann y titulada Memories of Passersby I, tiene un precio de salida de entre 30.000 y 40.000 libras esterlinas (35.000 y 45.000 euros).', 'imagen': 'https://picsum.photos/300/300/?random'},

    { 'category': { 'code': 3, 'text': 'Arte contemporáneo' }, 'title': 'Sotheby’s subasta por primera vez una obra de arte creada con inteligencia artificial', 'text': 'Sotheby\'s saca a subasta, por primera vez, una obra de arte generada por inteligencia artificial dentro del evento de Arte Contemporáneo que tendrá lugar durante la mañana del próximo 6 de marzo en Londres. La pieza, de Mario Klingemann y titulada Memories of Passersby I, tiene un precio de salida de entre 30.000 y 40.000 libras esterlinas (35.000 y 45.000 euros).', 'imagen': 'https://picsum.photos/300/300/?random'},
    
    { 'category': { 'code': 3, 'text': 'Arte contemporáneo' }, 'title': 'Sotheby’s subasta por primera vez una obra de arte creada con inteligencia artificial', 'text': 'Sotheby\'s saca a subasta, por primera vez, una obra de arte generada por inteligencia artificial dentro del evento de Arte Contemporáneo que tendrá lugar durante la mañana del próximo 6 de marzo en Londres. La pieza, de Mario Klingemann y titulada Memories of Passersby I, tiene un precio de salida de entre 30.000 y 40.000 libras esterlinas (35.000 y 45.000 euros).', 'imagen': 'https://picsum.photos/300/300/?random'},

    { 'category': { 'code': 3, 'text': 'Arte contemporáneo' }, 'title': 'Sotheby’s subasta por primera vez una obra de arte creada con inteligencia artificial', 'text': 'Sotheby\'s saca a subasta, por primera vez, una obra de arte generada por inteligencia artificial dentro del evento de Arte Contemporáneo que tendrá lugar durante la mañana del próximo 6 de marzo en Londres. La pieza, de Mario Klingemann y titulada Memories of Passersby I, tiene un precio de salida de entre 30.000 y 40.000 libras esterlinas (35.000 y 45.000 euros).', 'imagen': 'https://picsum.photos/300/300/?random'},

    { 'category': { 'code': 3, 'text': 'Arte contemporáneo' }, 'title': 'Sotheby’s subasta por primera vez una obra de arte creada con inteligencia artificial', 'text': 'Sotheby\'s saca a subasta, por primera vez, una obra de arte generada por inteligencia artificial dentro del evento de Arte Contemporáneo que tendrá lugar durante la mañana del próximo 6 de marzo en Londres. La pieza, de Mario Klingemann y titulada Memories of Passersby I, tiene un precio de salida de entre 30.000 y 40.000 libras esterlinas (35.000 y 45.000 euros).', 'imagen': 'https://picsum.photos/300/300/?random'},

    { 'category': { 'code': 3, 'text': 'Arte contemporáneo' }, 'title': 'Sotheby’s subasta por primera vez una obra de arte creada con inteligencia artificial', 'text': 'Sotheby\'s saca a subasta, por primera vez, una obra de arte generada por inteligencia artificial dentro del evento de Arte Contemporáneo que tendrá lugar durante la mañana del próximo 6 de marzo en Londres. La pieza, de Mario Klingemann y titulada Memories of Passersby I, tiene un precio de salida de entre 30.000 y 40.000 libras esterlinas (35.000 y 45.000 euros).', 'imagen': 'https://picsum.photos/300/300/?random'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
