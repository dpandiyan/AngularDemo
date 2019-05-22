import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  activeID: any
  employeeDetail: any

  constructor(private activateRoute: ActivatedRoute, private empService: EmployeeService, private myRouter: Router) { }

  ngOnInit() {
    console.log(this.activateRoute)
    this.activeID = this.activateRoute.snapshot.params.empID

    this.empService.getEmployeeDetailsByID(this.activeID).subscribe((response) => {
      console.log(response)
      this.employeeDetail = response
    })
  }

  goBack(){
    this.myRouter.navigate(["/RESTService"])
  }  
}
