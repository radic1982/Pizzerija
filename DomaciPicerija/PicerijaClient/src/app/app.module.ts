import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from './service/authentication-service.service';
import { JwtUtilsService } from './service/jwt-utils.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { CanActivateAuthGuard } from './service/can-activate-auth.guard';
import { MainComponent } from './page/main/main.component';
import { CategoryService } from './service/category.service';
import { DetailsComponent } from './page/details/details.component';
import { MenuService } from './service/menu.service';
import { CommentService } from './page/details/comment.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent},
  { path: 'news/:id', component: DetailsComponent},
  // { path: 'main', component: MainComponent, canActivate:[CanActivateAuthGuard]},
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    MainComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService,
    MenuService,
    CategoryService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
