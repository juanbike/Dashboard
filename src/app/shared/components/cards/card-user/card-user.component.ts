import { Component, Input, OnInit } from '@angular/core';
import { ICardUser } from '../icard-user.metadata';


@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  @Input() data: ICardUser = {
    avatar: '',
    name: '',
    age: 1,
    description: 'p'
  }

  constructor(){}
  ngOnInit(): void {

  }
}
