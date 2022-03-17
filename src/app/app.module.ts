import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ListaMagazzinoComponent } from './magazzino/lista-magazzino/lista-magazzino.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { MagazzinoDettagliComponent } from './magazzino/magazzino-dettagli/magazzino-dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ListaMagazzinoComponent,
    ProductDetailsComponent,
    MagazzinoDettagliComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
