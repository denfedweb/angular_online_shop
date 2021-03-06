import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLoyoutComponent} from './shared/main-loyout/main-loyout.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {CartPageComponent} from './cart-page/cart-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainLoyoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'product/:id',
        component: ProductPageComponent
      },
      {
        path: 'cart',
        component: CartPageComponent
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
