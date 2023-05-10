import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer.intertface';
import { CustomersService } from 'src/app/services/customers-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent {

  customer : Customer = {
    id : 0,
    name: "",
    site: "", 
    email: "",
    street: "",
    postalCode: "",
    city:""
  };
  id : number;
  routeSubscription : any;

  constructor(private customerService:CustomersService, private route: ActivatedRoute)
  {}

  ngOnInit()
  {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = params['id']
    })

    if(this.id != 0)
    {
      this.customerService.getCustomer(this.id).subscribe((customer:any) => {
        this.customer = customer
      })
    }

    
  }

}
