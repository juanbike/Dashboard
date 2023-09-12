import { CardUserComponent } from "./cards/card-user/card-user.component";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";


export const components: any[]= [
  CardUserComponent,
  TitleH1Component
];
export * from './cards/card-user/card-user.component'
export * from "./titles/title-h1/title-h1.component";

/*
Capitulo:4, Página: 7
aquí vamos a agregar todos los componentes genéricos de la carpeta SHARED para ponerlos a disposición de los componentes de la
aplicación, son pequeños componentes que sirven a un componente más grande. 
*/