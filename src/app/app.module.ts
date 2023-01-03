import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInModule } from './modules/log-in/log-in.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelModule } from './modules/admin-panel/admin-panel.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    LogInModule,
    HttpClientModule,
    AdminPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
