import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './auth.guard';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { BrandProductComponent } from './components/brand-product/brand-product.component';
import { CategoriesProductComponent } from './components/categories-product/categories-product.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [

  {
    path: "", component: BlankLayoutComponent, children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home",canActivate:[authGuard], component: HomeComponent ,title:'HomeComponent'},
      { path: "product",canActivate:[authGuard], component: ProductComponent ,title:'ProductComponent'},
      { path: "allorders",canActivate:[authGuard], component: AllordersComponent ,title:'AllordersComponent'},
      { path: "brand-product/:id",canActivate:[authGuard], component: BrandProductComponent ,title:'BrandProductComponent'},
      { path: "categories-product/:id",canActivate:[authGuard], component: CategoriesProductComponent ,title:'CategoriesProductComponent'},
      { path: "payment/:id",canActivate:[authGuard], component: PaymentComponent ,title:'PaymentComponent'},
      { path: "details/:slug/:id",canActivate:[authGuard], component: DetailsProductComponent ,title:'DetailsProductComponent'},
      { path: "categories",canActivate:[authGuard], component: CategoriesComponent ,title:'CategoriesComponent' },
      { path: "brands",canActivate:[authGuard], component: BrandsComponent,title:'BrandsComponent' },
      { path: "cart",canActivate:[authGuard], component: CartComponent ,title:'CartComponent'},
      { path: "wishlist",canActivate:[authGuard], component: WishlistComponent ,title:'WishlistComponent'},

    ]
  },

  {
    path: "", component: AuthLayoutComponent, children: [
      { path: "login", component: LoginComponent ,title:'LoginComponent'},
      { path: "register", component: RegisterComponent ,title:'RegisterComponent'},
    ]
  },

  { path: "**", component: NotfoundComponent ,title:'NotfoundComponent'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
