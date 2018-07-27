import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {Auth0Service} from './services/auth0.service';
import {RouterModule, Routes} from '@angular/router';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {Auth0Guard} from './services/auth0.guard';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent,
    canActivate: [Auth0Guard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: AuthCallbackComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    Auth0Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
