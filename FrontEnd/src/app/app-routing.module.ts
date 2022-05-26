import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './enciclopedia/pages/about/about.component';
import { AnimalsDangerComponent } from './enciclopedia/pages/animals-danger/animals-danger.component';
import { NewsComponent } from './enciclopedia/pages/news/news.component';

const routes: Routes = [
  {
    path:'home',
    component: NewsComponent,
    pathMatch:'full'
  },
  {
    path:'animals',
    component: AnimalsDangerComponent,
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
