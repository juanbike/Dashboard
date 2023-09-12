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
    /*
    capitulo 9 - Página: 46 - Angular - Como funciona y cómo crear el Router   1- Ruta por defecto

    Esta ruta POR DEFECTO, nos va a redirigir al módulo de usuarios, si nuestra aplicación tiene una ruta HOME esa ruta debe ir en el parámetro redirectTo y con patchMatch le
decimos que nos redirija a la ruta de forma exacta; es decir, que si en algún momento estamos en otra ruta de la aplicación y seleccionamos la ruta por defecto angular nos va a
mostrar exactamente esa ruta.
    */
   
    path:'',
    redirectTo:'panel/user',
    pathMatch:'full'
  },
  
  {
    /*
    El SKELETON contiene los componentes principales es decir: NAVIGATON, ROUTER-OUTLET y FOOTER
    */
    path:'panel',
    component: SkeletonComponent,
    /*
    Aquí en CHILDREN las rutas podemos agregar por componente o módulo; en este caso como es si es un sistema muy grande en PATH podemos agregar la palabra panel; para definir que
      es un sistema de administración; entonces nuestra primera ruta será panel/user 
        */
    children:[
      {
        /*
        Capitulo-6: Pagina:24
        Cargamos el módulo de usaurios
        */
        path:'user',
        loadChildren: () =>
        import('./modules/user/user.module').then((m) => m.UserModule)
      }
    ]
  },
  /*
    capitulo -9: Página 50 RUTA POR DEFECTO

  El router funciona buscando las rutas desde arriba hasta abajo el busca las rutas que le escribimos en el navegador si consigue una ruta por ejemplo el panel de usuarios entonces
  ejecuta el user-routing.module.ts de módulo de usuarios y muestra el componente; si no consigue ninguna ruta lo redirecciona a la ruta por defecto; en este caso /panel/user.
  */
  {
    path: '**',
    redirectTo: '/panel/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
