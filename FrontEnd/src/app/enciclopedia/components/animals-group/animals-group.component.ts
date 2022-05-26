import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../../interfaces/animal.interface';

@Component({
  selector: 'app-animals-group',
  templateUrl: './animals-group.component.html',
  styleUrls: ['./animals-group.component.css']
})
export class AnimalsGroupComponent implements OnInit {

  @Input() animales:Animal[] = []
  @Output() Index: EventEmitter<number>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  seleccionar(index:number){
    this.Index.emit(index)
  }

}
