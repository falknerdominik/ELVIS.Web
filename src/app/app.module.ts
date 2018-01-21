import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './view/pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './view/pages/home/home.component';
import { ApiModule, Configuration } from './library/api';
import { FormsModule } from "@angular/forms";
import { AuthentificationService } from './library/services/authentification-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './view/components/menu/menu.component';
import { SettingsService } from './library/services/settings-service.service';

export function apiConfig() {
  return new Configuration({
    basePath: 'http://localhost:50000',
    withCredentials: false
  });
}

apiConfig().selectHeaderContentType(['application/json']);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfig),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthentificationService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
