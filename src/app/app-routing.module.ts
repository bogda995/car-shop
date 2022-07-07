import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from 'src/app/components/car/car.component';
import { CarListComponent } from 'src/app/components/car-list/car-list.component';
import { CartComponent } from 'src/app/components/cart/cart.component';



const routes: Routes = [    
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:id', component: CarComponent},
  {path: 'cart',component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
