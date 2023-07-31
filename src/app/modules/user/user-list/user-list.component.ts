import { Component, OnInit } from '@angular/core';
import { ICardUser } from 'src/app/shared/components/cards/icard-user.metadata';

/*
Angular basico a avanzado - Capitulos 4 al 9

Capitulo 7 - Página 29

En la clase del componente que recibe la interface (lista de usuario) creamos un objeto
“title” de tipo público que tiene como propiedades type y text
*/


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
/*
  public title = {
    type: 'primary',
    Text: 'Lista de Usuarios'
  }
*/

public users: ICardUser = {
  name: "Juan Carlos Arteaga Ochoa",
  age: 45,
  description: 'Desarrollador de Oportunidades de Negocios',
  avatar:'https://www.vecteezy.com/free-vector/user-avatar'
}
  constructor(){}

  ngOnInit(): void {

  }

}
