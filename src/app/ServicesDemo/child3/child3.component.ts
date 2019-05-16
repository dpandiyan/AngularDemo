import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  @Input() ReceivedName 
  @Output() SendToParent = new EventEmitter()
  
  constructor() { } 
  ngOnInit() {
  }

  BroadCastChange = function()
  {
    this.SendToParent.emit(this.ReceivedName)
  }

}
