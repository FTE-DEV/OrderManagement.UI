import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Customer } from '../interfaces/customer.intertface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  
  uri = environment.apiUri + 'Customers'
  
  constructor(private httpClient:HttpClient) { }

  getCustomers() : Observable<Customer[]>
  {
    let res = this.httpClient.get<Customer[]>(this.uri)
    return res;
  }

  getCustomer(id:number) : Observable<Customer[]>
  {
    let res = this.httpClient.get<Customer[]>(this.uri+'/'+id)
    return res;
  }
}
