import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'zapatillas', component: ZapatillasComponent },
    { path: 'videojuego', component: VideojuegoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: '**', component: NotFoundComponent } // Catch-all route for 404
];

export const routing = RouterModule.forRoot(routes);