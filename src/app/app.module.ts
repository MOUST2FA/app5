import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarauthComponent } from './components/navbarauth/navbarauth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DetailsProductComponent } from './components/details-product/details-product.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandProductComponent } from './components/brand-product/brand-product.component';
import { CategoriesProductComponent } from './components/categories-product/categories-product.component';
import { ToastrModule } from 'ngx-toastr';
import { MyhttpInterceptor } from './interceptors/myhttp.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { SearchPipe } from './pipe/search.pipe';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    CategoriesComponent,
    BrandsComponent,
    CartComponent,
    NavbarauthComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    DetailsProductComponent,
    PaymentComponent,
    AllordersComponent,
    FooterComponent,
    BrandProductComponent,
    CategoriesProductComponent,
    SearchPipe,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    CarouselModule,
    ToastrModule.forRoot(),
    FormsModule,

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS ,useClass:MyhttpInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS ,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
