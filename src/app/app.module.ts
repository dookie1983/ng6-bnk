import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BnkGirlListComponent } from './components/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlComponent } from './components/bnk-girl/bnk-girl.component';
import { RouterModule, Route } from '@angular/router';
import { InstagramComponent } from './components/instagram/instagram.component';
import { InstagramListComponent } from './components/instagram-list/instagram-list.component';
import { BnkSuffixPipe } from './pipes/bnk-suffix.pipe';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component'

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/edit/:memberId', component:AdminEditComponent },
  { path: 'instargram/:instagramId', component: InstagramListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent,
    BnkGirlComponent,
    InstagramComponent,
    InstagramListComponent,
    BnkSuffixPipe,
    LoginComponent,
    AdminComponent,
    AdminListComponent,
    AdminEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
