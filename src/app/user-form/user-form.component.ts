import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  employeeModel = new Employee('','', '' , '' , '')

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employeeModel)
  }

}
