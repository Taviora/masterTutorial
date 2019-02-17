import { Injectable } from '@angular/core';
import { Zapatilla } from '../modelos/zapatilla';

@Injectable()

export class ZapatillaService{

    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic','Reebook','Blanco',80,true),
            new Zapatilla('Nike Runner','Nike','Blanco',78,true),
            new Zapatilla('Burros','Cat','Cafe nuez',208,true),
            new Zapatilla('Adidas','Adidas','Gris',180,false),
            new Zapatilla('Adidas originals','Adidas','verde',180,false)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla>{

        return this.zapatillas;
    }
}
