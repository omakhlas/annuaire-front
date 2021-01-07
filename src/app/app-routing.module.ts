import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchContactComponent} from './search-contact/search-contact.component';

const routes: Routes = [
  { path : '**', pathMatch : 'full', redirectTo : 'searchContacts'},
  {path: 'searchContacts', component: SearchContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
