import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 


import { FlexModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemgroupsComponent } from './components/itemgroups/itemgroups.component';
import { OrdersComponent } from './components/orders/orders.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CustomerComponent } from './components/customers/customer/customer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    DashboardComponent,
    CustomersComponent,
    ItemsComponent,
    ItemgroupsComponent,
    OrdersComponent,
    InvoicesComponent,
    ToolbarComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FlexModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
