import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {


  constructor(private paisService:PaisService) { }

  termino = ""
  hayError: boolean = false
  paises:Country[] =[]

  ngOnInit(): void {
  }

  Buscar(termino:string){
    this.hayError= false
    this.termino = termino
    this.paisService.buscarCapital(this.termino)
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

    this.hayError = false;
    //Hacer sugerencias
  }

}
