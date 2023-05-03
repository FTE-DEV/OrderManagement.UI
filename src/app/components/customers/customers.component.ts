import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer.intertface';
import { CustomersService } from 'src/app/services/customers-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers : Customer[] = []
  customersColumns: string[] = ['id', 'name', 'site', 'email'];
  constructor(private customersService:CustomersService){}

  ngOnInit()
  {
    this.customersService.getCustomers().subscribe((data:any) => {
      this.customers = data.content
    })

    
  }
}
