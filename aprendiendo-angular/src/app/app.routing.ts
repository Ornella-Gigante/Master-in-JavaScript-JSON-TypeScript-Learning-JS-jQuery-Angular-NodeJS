/**
 * EN ESTE ARCHIVO IRÁ TODA LA CONFIGURACIŃO DE RUTAS 
 * DE LA APLICACIÓN DE ANGULAR 
 * SE CONFIGURARÁ EL ROUTER Y SE DARÁ DE ALTA LA ROUTA DE LA APP 
 * 
 */

import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { ZapatillasComponent} from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { NotFoundError } from "rxjs";




// Creacion de array de configuración de las rutas 
// Componente que se cargará al principio en la ruta vacía o '/' 

const appRoutes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent },
    {path:'videojuego', component: VideojuegoComponent},
    {path:'cursos', component: CursosComponent},
    {path: '**', component: NotFoundError}

];



// Exportación del módulo 



