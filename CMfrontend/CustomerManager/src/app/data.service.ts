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
	hosturl='http://192.168.10.154:8080';



saveCustomer(customer){
	return this.http.post(hosturl+"/api/savecustomer",customer);//.map(res => { return res;});
}

getData(){
	return this.http.get(hosturl+"/api/customers");

}

deleteCustomerById(id){
	 return this.http.delete(hosturl+"/api/delete/"+id);
}

getDataById(id){
	return this.http.get(hosturl+"/api/customer/"+id);
}

}

// End of service
