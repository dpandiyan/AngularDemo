import { Component, OnInit } from '@angular/core';
import {LocalServiceService } from '../../ServicesDemo/local-service.service'

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private local:LocalServiceService) { }

  AllBanks = []

  ngOnInit() {
this.AllBanks = this.local.banks
  }

  AddNewBank()
  {
    this.local.PushBank("TMB")
    this.AllBanks = this.local.banks
  }

}
