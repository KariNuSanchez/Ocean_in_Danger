import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/noticia.interface';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  @Input() noticias:Datum[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
