import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: '' , redirectTo: '/form', pathMatch: 'full'},
  { path: 'data', component: DataComponent},
  { path: 'form', component: UserFormComponent},
  { path: "**" , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserFormComponent, DataComponent, PageNotFoundComponent]
