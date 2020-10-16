import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { ListOfHeroesComponent } from './list-of-heroes/list-of-heroes.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'heroes', component: ListOfHeroesComponent },
  { path: 'details/:hero.id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
