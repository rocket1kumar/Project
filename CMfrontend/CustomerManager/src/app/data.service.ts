import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Customer } from './customer.model';
//import { CUSTOMERS } from './customers';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor( private http: HttpClient) { }

// getData():Customer[]{
// 	return CUSTOMERS;
// }

saveCustomer(customer){
	return this.http.post("http://localhost:8080/api/savecustomer",customer);//.map(res => { return res;});
}

getData(){
	return this.http.get("http://localhost:8080/api/customers");

}

deleteCustomerById(id){
	 return this.http.delete("http://localhost:8080/api/delete/"+id);
}

getDataById(id){
	return this.http.get("http://localhost:8080/api/customer/"+id);
}

}
