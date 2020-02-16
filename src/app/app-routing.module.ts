/** angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** end angular */

/** components */
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
/** end components */

/** resolvers */
import { HomeResolver } from './components/home/home.resolver';
/** end resolvers */

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {books: HomeResolver}
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
