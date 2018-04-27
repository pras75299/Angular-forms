import { Component } from '@angular/core';

@Component({
  selector: 'form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent {

  submit(y){
    console.log(y);
  }

}
