import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import  * as  fromComponents from './components';
import { RouterModule } from '@angular/router';






@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule  
  ],
  declarations: [...fromComponents.components],
  /*
  Pagina:6, Capitulo:4
Arreglo EXPORTS: este es nuestro mòdulo compartido aquí declaramos todos los módulos de angular que van a estar disponibles en
toda nuestra aplicaciòn.
*/
  exports:[
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, fromComponents.components, RouterModule
  ]
})
export class SharedModule { }
