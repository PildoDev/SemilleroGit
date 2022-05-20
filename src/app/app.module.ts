import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InitialTemplateComponent } from './initial-template/initial-template.component';
import { FooterComponent } from './footer/footer.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientService } from './clientes/client.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'lenguajes', component: NgForComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitialTemplateComponent,
    FooterComponent,
    NgForComponent,
    ClientesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
