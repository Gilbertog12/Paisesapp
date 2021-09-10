import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
   `button{
     margin-right:5px
   }`
  ]
})
export class PorRegionComponent implements OnInit {


  regiones:string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva :string = ''
  paiseRegiones:Country[] =[]
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  getclassCss(region:string):string {
      return (region === this.regionActiva)? 'btn btn-primary' :'btn btn-outline-primary'
  }

  activarRegion(region:string){


    if(region === this.regionActiva){
      return
    }
    this.regionActiva = region

    //Hacer el llamado al servicio mediante region

    this.paisService.getPaisPorRegion(region).subscribe
    (
      resp => {
        console.log(resp)
        this.paiseRegiones = resp
      }
    )
  }

}
