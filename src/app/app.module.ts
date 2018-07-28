import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {Auth0Service} from './services/auth0.service';
import {RouterModule, Routes} from '@angular/router';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {Auth0Guard} from './services/auth0.guard';
import { DevicesComponent } from './components/dashboard/devices/devices.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import {LightberryService} from './services/lightberry.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    canActivate: [Auth0Guard],
    children: [
      { path: 'devices', component: DevicesComponent},
      { path: 'admin', component: AdminComponent },
      { path: '', redirectTo: 'devices', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: AuthCallbackComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    LoginComponent,
    DashboardComponent,
    DevicesComponent,
    AdminComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    Auth0Service,
    LightberryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
