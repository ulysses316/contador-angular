import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
import { SumaComponent } from './components/suma/suma.component';
import { HeaderComponent } from './components/header/header.component';
import { MultiComponent } from './components/multi/multi.component';
import { ClearComponent } from './components/clear/clear.component';
import { HelloComponent } from './components/hello/hello.component';
import { ContadoresComponent } from './components/contadores/contadores.component';
import { NumeroComponent } from './components/numero/numero.component';



@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    HeaderComponent,
    MultiComponent,
    ClearComponent,
    HelloComponent,
    ContadoresComponent,
    NumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
