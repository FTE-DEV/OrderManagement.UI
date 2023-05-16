import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemgroupsComponent } from './components/itemgroups/itemgroups.component';
import { OrdersComponent } from './components/orders/orders.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { CustomerComponent } from './components/customers/customer/customer.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  { path: 'customers', component: CustomersComponent, title: 'Customers' },
  { path: 'customers/:id', component: CustomerComponent, title: 'Customer' },
  { path: 'items', component:ItemsComponent, title: 'Items' },
  { path: 'itemGroups', component: ItemgroupsComponent, title: 'Item Groups' },
  { path: 'orders', component: OrdersComponent, title: 'Orders' },
  { path: 'invoices', component: InvoicesComponent, title: 'Invoices' },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, 
  


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
