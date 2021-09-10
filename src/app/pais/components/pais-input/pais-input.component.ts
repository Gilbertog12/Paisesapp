import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDeBounce:EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = " "
  termino:string = ''
  
  deBouncer:Subject<string> = new Subject;
  constructor() { }
  ngOnInit() {

    this.deBouncer
    .pipe(
      debounceTime(300)
    ).subscribe(valor=>{
      this.onDeBounce.emit(valor)
      console.log('debouncer', valor)
    })

  }

  Buscar(){

    this.onEnter.emit(this.termino)

  }

  teclaPresionada(){

    

    this.deBouncer.next(this.termino)
    
  }



}
