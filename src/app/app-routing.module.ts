import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ClearComponent,
  HeaderComponent,
  HelloComponent,
  MultiComponent,
  SumaComponent,
  ContadoresComponent
} from "./components/index.paginas";

const routes: Routes = [
  {path: 'home', component: ContadoresComponent},
  {path: 'hello', component: HelloComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
