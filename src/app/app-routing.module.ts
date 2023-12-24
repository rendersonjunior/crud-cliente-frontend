import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/cliente/list/list.component';
import { DetailsComponent } from './component/cliente/details/details.component';
import { NewComponent } from './component/cliente/new/new.component';

const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  { path: 'cliente', component: ListComponent },
  { path: 'cliente/:id', component: DetailsComponent },
  { path: 'new', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
