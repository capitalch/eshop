import { RouterModule, Routes } from '@angular/router';
import { CompositeComponent } from './composite/composite.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmartResolver } from './emart-resolver';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'composite'
  }
  , {
    path: 'composite',
    component: CompositeComponent,
    children: [
      // {
      //   path: ''
      //   , redirectTo: 'product'
      // }
      // ,
      {
        path: 'product'
        , component: ProductComponent
        // , resolve: { message: EmartResolver }
      }
      , {
        path: 'productDetails'
        , component: ProductDetailsComponent
        // , resolve: { message: EmartResolver }
      }
      , { path: 'cart', component: CartComponent }
      , { path: 'placeOrder', component: PlaceOrderComponent }
      , { path: 'login', component: LoginComponent }
      , { path: 'signup', component: SignupComponent }
    ]
  }
];
