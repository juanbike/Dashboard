import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/data/services/api/users.service';
//import { USERS_DATA } from 'src/app/data/constants/users.constants';
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
Para un solo usuario

public user: ICardUser = 

  {
  name: "Juan Carlos Arteaga Ochoa",
  age: 45,
  description: 'Desarrollador de Oportunidades de Negocios',
  avatar:'../../../../assets/img/yo.jpg'
}
*/

/*
public users: ICardUser[] = [
  {
  id: 1,
  name: "Bicicleta de Montaña Specialize modelo Trend",
  age: 45,
  description: 'Contruida con fibra del carbono y componentes Cateye',
  avatar:'../../../../assets/img/11.jpg',
  work: "Diseñada para rutas de montaña"
  },
  {
    id: 2,
    name: "Bicicleta de Montaña Specialize modelo Auyantepuy",
    age: 45,
    description: 'Fabricada con Acero Reforzado y Fibra de Carbono',
    avatar:'../../../../assets/img/12.jpg'
  }

]
*/

  //public users: ICardUser[] = USERS_DATA;
  public users: ICardUser[] = [];
  constructor( private userService: UsersService){
    this.userService.getUsers().subscribe(
      r => {
          this.users = r
      }
    )
  }

  ngOnInit(): void {

  }

}
