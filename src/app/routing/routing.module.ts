import { BrandComponent } from './../core/brand/brand/brand.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../shared/home/home.component';
import { VehicleListComponent } from '../core/vehicle/vehicle-list/vehicle-list.component';
import { SearchComponent } from '../core/search/search/search.component';
import { ClientComponent } from '../core/client/client/client.component';
import { ClientListComponent } from '../core/client/client-list/client-list.component';
import { VehicleComponent } from '../core/vehicle/vehicle/vehicle.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'find/', component: SearchComponent },
  { path: 'client/:id', component: ClientComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'vehicle/:id', component: VehicleListComponent },  
  { path: 'brand', component: BrandComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
