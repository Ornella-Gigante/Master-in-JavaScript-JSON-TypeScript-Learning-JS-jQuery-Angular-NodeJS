import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {  provideHttpClient } from '@angular/common/http'; // Usa provideHttpClient
import { AppComponent } from './app.component';
import { ExternoComponent } from './externo/externo.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExternoComponent,
    CalculadoraPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    provideHttpClient() // Configuración correcta para HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
