import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MainComponent } from './Layout/main/main.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { GamesListComponent } from './Pages/games-list/games-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './Pages/page404/page404.component';
import { SingleItemComponent } from './Pages/single-item/single-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    GamesListComponent,
    Page404Component,
    SingleItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
