/** angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** end angular */

/** modules */
import { AppRoutingModule } from './app-routing.module';
import { AngularSharedModule } from 'src/shared/modules/angular-shared.module';
import { AngularMaterialSharedModule } from 'src/shared/modules/angular-material-shared.module';
/** end modules */

/** components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/home/components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
/** end components */

/** services */
import { BookService } from './components/home/services/book.service';
import { CartService } from './components/home/services/cart.service';
/** end services */

/** resolvers */
import { HomeResolver } from './components/home/home.resolver';
/** end resolvers */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSharedModule,
    BrowserAnimationsModule,
    AngularMaterialSharedModule,
  ],
  providers: [HomeResolver, BookService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
