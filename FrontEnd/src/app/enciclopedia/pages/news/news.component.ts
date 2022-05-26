import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Datum } from '../../interfaces/noticia.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    data:['',[Validators.required]],
    photo:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  noticias:Datum[] = []

  constructor(private servicioNoticia:ServicesService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.servicioNoticia.getDatosNoticias()
    .subscribe(resp=>{
      this.noticias = resp;
    })
  }
}
