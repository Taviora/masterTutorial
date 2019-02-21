import { Component, OnInit } from '@angular/core';


// Declaramos las variables para jQuery 
//asi de esta forma podemos utilizarlo sin problema
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $("#logo").click(function(e){
      $("header").css("background","green");
      
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 400
    });

  }

}
