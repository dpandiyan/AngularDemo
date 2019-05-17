import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  fullName=""
  age=""
  hobbies=""

  constructor() { }

  ngOnInit() {
  }
  SubmitDetails(e)
  {
    console.log(e)
console.log("Form Values: " + JSON.stringify(e.value))
console.log("Form Valid status: "+ JSON.stringify(e.valid))
console.log("Form In-Valid status: "+ JSON.stringify(e.invalid))

  }
}
