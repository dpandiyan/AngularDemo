import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpCli:HttpClient) { }

  getRemoteUsers(){
    return this.httpCli.get("https://jsonplaceholder.typicode.com/users")
  }
}
