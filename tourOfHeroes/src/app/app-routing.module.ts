import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListOfHeroesComponent } from './list-of-heroes/list-of-heroes.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'heroes', component: ListOfHeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
