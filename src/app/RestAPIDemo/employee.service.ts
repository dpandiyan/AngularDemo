import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpCli:HttpClient) { }

  getRemoteUsers(){
    return this.httpCli.get("http://dummy.restapiexample.com/api/v1/employees")
  }

  getEmployeeDetailsByID(empID){
    return this.httpCli.get("	http://dummy.restapiexample.com/api/v1/employee/"+ empID)
  }

  deleteEmployeeByID(empID){
    return this.httpCli.delete("http://dummy.restapiexample.com/api/v1/delete/"+ empID)
  }
  addEmployee(emp)
  {
    return this.httpCli.post("http://dummy.restapiexample.com/api/v1/create", emp)
  }
}
