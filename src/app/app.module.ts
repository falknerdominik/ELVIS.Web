import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './view/pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './view/pages/home/home.component';
import { ApiModule, Configuration } from './library/api';

export function apiConfig() {
  return new Configuration({
    username: '...',
    password: '...',
    basePath: 'localhost:50000',
    withCredentials: false
  });
}

apiConfig().selectHeaderContentType(['application/json']);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
