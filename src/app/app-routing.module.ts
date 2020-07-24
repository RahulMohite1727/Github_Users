import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { AllUserComponent } from './all-user/all-user.component';


const routes: Routes = [
  { path: '', component: GithubComponent },
  { path: 'alluser', component: AllUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
