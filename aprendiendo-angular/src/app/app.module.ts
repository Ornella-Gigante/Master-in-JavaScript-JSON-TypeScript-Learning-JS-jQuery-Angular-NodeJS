// app.module.ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// videojuego.component.ts
import { Component } from "@angular/core";

@Component({
  selector: 'videojuego',
  template: `
    <h2>Componente de Videojuegos</h2>
    <ul>
      <li>GTA</li>
      <li>Prince of Persia</li>
      <li>Tekken</li>
      <li>Mario</li>
    </ul>
  `
})
export class VideojuegoComponent {
  constructor() {
    console.log("Se ha cargado el componente: videojuego.component.ts");
  }
}