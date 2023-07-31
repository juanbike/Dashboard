import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { userRoutingModule } from './user-rouiting.module';
import { UserListComponent } from './user-list/user-list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';



@NgModule({
  declarations: [UserListComponent, ListDetailComponent],
  imports: [
    CommonModule, SharedModule, userRoutingModule
  ]
})
export class UserModule { }
