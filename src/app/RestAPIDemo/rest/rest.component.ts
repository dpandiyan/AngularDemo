import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  receivedData:any
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
     this.empService.getRemoteUsers().subscribe((response)=>{
      console.log(response)
      this.receivedData = response
      console.log(this.receivedData)
     }, function(error){
       console.log(error)
      })
  }

}
