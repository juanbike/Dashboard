import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


/*
capitulo:6 , Pagina:19

Vamos a crear un módulo de rutas para el módulo de usuarios; para visualizarla en nuestra aplicación
copiamos el contenido de app-routing.module.ts: Creamos un arreglo que va a conter las rutas del modulo de usuarios y su ruta por defecto que llama al componentes: UserListComponent
el método FORCHILD carga las rutas del módulo de usuarios
*/

const routes: Routes = [
  {
    path:'',
    component:UserListComponent
  },
  /*
  cAPITULO 9 - Página:54 RUTA DE DETALLE al atributo Path: le damos un id
  */
  {
    path:':id',
    component:UserDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutingModule { }
