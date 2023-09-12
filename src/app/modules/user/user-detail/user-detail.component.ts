import { Component, OnInit  } from '@angular/core';
import { ICardUser } from '../../../shared/components/cards/icard-user.metadata';

import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from 'src/app/data/constants/users.constants';
import { UsersService } from 'src/app/data/services/api/users.service';




@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
//export class UserDetailComponent implements OnInit {


export class UserDetailComponent implements OnInit {
  public users: ICardUser[] =   USERS_DATA;
  public id: number;
  public currentUser : ICardUser = USERS_DATA[1]  ;
  



 

  constructor(private route: ActivatedRoute,
    private userService: UsersService){
    // Recuperamos el ID del usuario
    this.id = this.route.snapshot.params['id'];
    //Buscamos el usuario por su id; se compara el  ID de arreglo(user.id) con el ID (del item que seleccionamos) que viene desde user.routing.module.ts (+this.id) 
   // let currentUser = this.users.find(user => user.id ===+this.id )
    //console.log(currentUser)
  }

/*
currentUser es una constante y la misma se carga de forma automática y el método ngOnInit() se utiliza para un proceso de tipo asíncrono
*/
  /*

  ngOnInit(): void {
    console.log({
    
    Paso-1:
    Aqui verficamos si esta trayendo la informacion correcta
   
      id:this.id,
      users: this.users
    

      //this.data = this.users.find(user => user.id === this.id)
     
    });
      
  }
 */




ngOnInit(){
  this.userService.getUserById(this.id).subscribe(
    r => this.currentUser
    
  )
}



}
