import { Component, OnInit, ViewChild } from '@angular/core';
import { Animal } from '../../interfaces/animal.interface';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-animals-danger',
  templateUrl: './animals-danger.component.html',
  styleUrls: ['./animals-danger.component.css']
})
export class AnimalsDangerComponent implements OnInit {


  animales:Animal[] = []
  animalesSugeridos: Animal[] = []
  cardActiva:boolean = false;
  index:number = 0;

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.service.getAnimales()
    .subscribe(animales=> {
      this.animales = animales
      //console.log(this.animales)
    })
  }


  sugerencias(sugerencia:string){
    if(sugerencia.trim().length === 0){
      return
    } else{
        this.animalesSugeridos = []
        this.service.getAnimalName(sugerencia)
        .subscribe(animales=>{
          this.animalesSugeridos = animales
          console.log(this.animalesSugeridos)
      })
    }
    
  }

  buscar(termino:string){
    if(termino.trim().length === 0 || this.animalesSugeridos.length === 0){
      console.log(this.animalesSugeridos)
      return
    }else{
        this.animales = []
        this.service.getAnimalName(termino)
        .subscribe(animales=>{
          this.animales = animales
          this.animalesSugeridos = []
      })
    }
    
  }

  cardSeleccionado(index:number){
    this.index = index
    this.cardActiva = !this.cardActiva
    
  }

  cardClass(){
    return (this.cardActiva) ? 'col-md-7' : 'col'
  }

}
