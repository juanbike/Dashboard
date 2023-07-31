import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';


const routes: Routes = [
  {
    path:'',
    component:UserListComponent
  },
  {
    path:'detail',
    component:ListDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutingModule { }
