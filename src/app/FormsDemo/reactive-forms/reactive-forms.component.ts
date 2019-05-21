import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  MyForm: any

  constructor() { }

  ngOnInit() {
    this.MyForm = new FormGroup(
      {
        name: new FormControl("Pandiyan", Validators.compose(                    [
                      Validators.required, 
                      Validators.minLength(3)
                    ])),
        score: new FormControl("100", this.ScoreValidator),
        hobby: new FormControl()
      })
  }

  ScoreValidator = function (control) {
    console.log(control)
    if (control.value < 10) {
      return { score: true }
    }
  }
  submitForm = function (rf) {
    console.log(rf)
  }
}
