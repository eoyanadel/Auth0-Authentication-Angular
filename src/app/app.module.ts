import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Auth0 */
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-spmp37lc.us.auth0.com',
      clientId: 'wdC7Vx5pcYmsU2Fx59QAQ5ju8MsX0QKN'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
