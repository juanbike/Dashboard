import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';


/*
pagina 24 -capitulo 6: C:\Users\jarteaga\Desktop\Juan\Angular Basico a Avanzado
Ahora en el módulo principal de las rutas (app-routing.module.ts) tenemos que cargar el
módulo de usuarios.
*/

const routes: Routes = [
  {
    path:'',
    component: SkeletonComponent,
    children:[
      {
        path:'',
        loadChildren: () =>
        import('./modules/user/user.module').then((m) => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
