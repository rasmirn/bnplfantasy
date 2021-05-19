import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { IncomingComponent } from './components/incoming/incoming.component';
import { TodayComponent } from './components/today/today.component';
import { CompletedComponent } from './components/completed/completed.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    IncomingComponent,
    TodayComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
