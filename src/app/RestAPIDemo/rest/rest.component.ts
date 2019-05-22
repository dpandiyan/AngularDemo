import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  receivedData:any
  employee:any

  constructor(private empService: EmployeeService, private myRouter: Router) { }

  ngOnInit() {
   this.getAllEmployees()
  }

  getAllEmployees(){
    this.empService.getRemoteUsers().subscribe((response)=>{
      console.log(response)
      this.receivedData = response
      console.log(this.receivedData)
     }, function(error){
       console.log(error)
      })
  }

  getEmployeeDetails(empID){
    console.log(empID)
    this.empService.getEmployeeDetailsByID(empID).subscribe((response)=>{
console.log(response)
    }    
    )
    this.myRouter.navigate(["/EmployeeDetails",empID])
  }

  DeleteEmployee(empID){
    this.empService.deleteEmployeeByID(empID).subscribe((response)=>{
      console.log(response)
      this.getAllEmployees()
       }
    )
  }
  addNewEmployee(){
this.employee = {
  name:"Testting", salary:"100000", age:"30", id:"1234"
}

this.empService.addEmployee(this.employee).subscribe((response)=>
{
  console.log(response)
  this.getAllEmployees()
})
  }
}
