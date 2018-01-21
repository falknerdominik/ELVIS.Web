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
import { ListComponent } from './view/pages/list/list.component';
import { AreacardComponent } from './view/components/areacard/areacard.component';
import { MandatRayComponent } from './view/components/mandat-ray/mandat-ray.component';
import { DetailComponent } from './view/pages/detail/detail.component';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { OverviewComponent } from './view/pages/overview/overview.component';

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
    MenuComponent,
    ListComponent,
    AreacardComponent,
    MandatRayComponent,
    DetailComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfig),
    FormsModule,
    HttpClientModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
  ],
  providers: [AuthentificationService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
