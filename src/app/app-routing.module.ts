import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontyHallComponent } from './monty-hall/monty-hall.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path:'monty-hall',  component:MontyHallComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
