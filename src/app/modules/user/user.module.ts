import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';



import { userRoutingModule } from './user-rouiting.module';
import { UserListComponent } from './user-list/user-list.component';

import { UserDetailComponent } from './user-detail/user-detail.component';



/*
capitulo:6 , Pagina:18
cargamos el modulo Shared que va a tener todos los componentes genéricos: Títulos del encabezado y el footer, por ejemplo.
*/

@NgModule({
  /*
capitulo:6 , Pagina:22

  En la propiedad declarations del decorador @ngModule agregamos los componentes del módulo de usuarios, es decir; userListComponent y userDetailComponent
  */
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule, SharedModule, userRoutingModule
  ]
})
export class UserModule { }
