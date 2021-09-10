import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `
  ]
})
export class PorPaisComponent implements OnInit {

  constructor(private paisService:PaisService) { }


  termino = ""
  hayError: boolean = false
  paises:Country[] =[]
  paisesSugeridos:Country[] =[]

  mostrarSugerencias:boolean = false

  ngOnInit(): void {
  }

  Buscar(termino:string){
    this.mostrarSugerencias = false

    this.hayError= false
    this.termino = termino
    this.paisService.buscarPais(this.termino)
    .subscribe( (pais) =>{
      
      this.paises = pais
      console.log(pais)
      
    }, (err)=>{
      console.error()
      this.hayError = true
      this.paises = []
    })
    
    console.log(this.termino)
  }

  sugerencias(termino : string){


    this.mostrarSugerencias = true

    this.hayError = false;
    this.termino = termino
    this.paisService.buscarPais(termino).subscribe(
        pais => this.paisesSugeridos=pais.splice(0,3),
        (err) => this.paisesSugeridos =[]
      )
    //Hacer sugerencias
  }

  buscarSugerido(termino:string){

    this.Buscar(termino)
  }

}
