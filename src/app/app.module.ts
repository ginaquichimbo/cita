import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCitaComponent } from './components/list-cita/list-cita.component';
import { CreateCitaComponent } from './components/create-cita/create-cita.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCitaComponent,
    CreateCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
