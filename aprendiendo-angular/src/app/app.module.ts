// COMPONENTE PADRE 
// CONTIENE LOS COMPONENTES HIJOS 
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ZapatillasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule{}