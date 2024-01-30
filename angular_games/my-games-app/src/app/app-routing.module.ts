import { GamesListComponent } from './Pages/games-list/games-list.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './Pages/page404/page404.component';

const routes: Routes = [
  { path: '', component: GamesListComponent },

  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
