import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsByNumComponent } from './pages/actions-by-num/actions-by-num.component';
import { AddActionComponent } from './pages/add-action/add-action.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  { path: '', component: ActionsByNumComponent },
  { path: 'addAction', component: AddActionComponent},
  { path: '**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
