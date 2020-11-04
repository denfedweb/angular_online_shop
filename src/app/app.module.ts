import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLoyoutComponent } from './shared/main-loyout/main-loyout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {AuthInterceptor} from './shared/auth.interceptor';
import { ProductComponent } from './product/product.component';
import { SortPipe } from './shared/sort.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainLoyoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ProductComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
