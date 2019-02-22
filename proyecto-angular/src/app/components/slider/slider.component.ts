import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Declaramos las variables para jQuery 
//asi de esta forma podemos utilizarlo sin problema
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number;
  @Input() etiquetas:boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor:any;

  constructor() {
    this.autor = {
      nombre:'Gustavo Solano',
      website: 'gustavosolanoweb.com',
      email: 'taviora@gmail.com'
    };
   }

  ngOnInit() {

    $("#logo").click(function(e){
      $("header").css("background","green");
      
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.etiquetas,
      slideWidth: this.anchura
    });

  }

  lanzar(event){
    console.log(event);
    this.conseguirAutor.emit(this.autor);

  }

}
