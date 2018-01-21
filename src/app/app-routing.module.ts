import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/pages/login/login.component';
import { HomeComponent } from './view/pages/home/home.component';
import { ListComponent } from './view/pages/list/list.component';
import { OverviewComponent } from './view/pages/overview/overview.component';
import { DetailComponent } from './view/pages/detail/detail.component';
import { SettingsComponent } from './view/pages/settings/settings.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }

