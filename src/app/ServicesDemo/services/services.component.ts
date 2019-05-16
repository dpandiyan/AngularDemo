import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  Name="Pandiyan"

  constructor() { }

  ngOnInit() {
  }

  ReceivedNewName = function(e){
    console.log(e)
    this.Name=e
  }

}
