import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MynavComponent } from "./shared/mynav/mynav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { DashboardComponent } from "./shared/dashboard/dashboard.component";
import { ProductListComponent } from "./core/product/product-list/product-list.component";
import { ProductComponent } from "./core/product/product/product.component";
import { HomeComponent } from "./shared/home/home.component";
import { RoutingModule } from "./routing/routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { AppService } from "./app.service";
import { AvaibilityPipe } from './pipes/avaibility.pipe';
import { ProductCategoryComponent } from './core/product/product-category/product-category.component';
import { FormsModule } from "@angular/forms";
import { RouterModalComponent } from "./shared/router-modal/router-modal.component";
import { RouterModalService } from "./shared/router-modal/router-modal.service";
import { MaterializeDirective } from "angular2-materialize";
import { SaleDetailComponent } from './core/sale/sale-detail/sale-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    DashboardComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    AvaibilityPipe,
    ProductCategoryComponent,
    RouterModalComponent,
    SaleDetailComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    AppService,
    RouterModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
