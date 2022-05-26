import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NewsComponent } from './pages/news/news.component';
import { AnimalsDangerComponent } from './pages/animals-danger/animals-danger.component';
import { AboutComponent } from './pages/about/about.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BrowserComponent } from './components/browser/browser.component';
import { RouterModule } from '@angular/router';
import { AnimalsGroupComponent } from './components/animals-group/animals-group.component';


@NgModule({
  declarations: [
    NewsComponent,
    AnimalsDangerComponent,
    AboutComponent,
    OverlayComponent,
    NoticiasComponent,
    FormularioComponent,
    BrowserComponent,
    AnimalsGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    
  ]
})
export class EnciclopediaModule { }
