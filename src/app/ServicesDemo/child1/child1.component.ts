import { Component, OnInit } from '@angular/core';
import {LocalServiceService } from '../../ServicesDemo/local-service.service'

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private local:LocalServiceService ) { }

  ngOnInit() {
    this.accessLocalService()
  }

  accessLocalService = function(){
    console.log(this.local.MyBank)
    console.log(this.local.DisplayBanks())
    console.log(this.local.AddBank())
    console.log(this.local.DisplayBanks())
  }

}
