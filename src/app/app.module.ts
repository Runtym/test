import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatMenuModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Route, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectComponent } from './direct/direct.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { InputComponent } from './input/input.component';
import { UserComponent } from './user/user.component';
const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'event',component:EventComponent},
  {path:'direct',component:DirectComponent},
  {path:'input',component:InputComponent},
  {path:'user',component:UserComponent},
  {path:'**',component:ErrorComponent}];

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HeaderComponent,
    FooterComponent,
    DirectComponent,
    HomeComponent,
    ErrorComponent,
    InputComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
