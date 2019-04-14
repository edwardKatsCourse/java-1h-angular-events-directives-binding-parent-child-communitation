import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import User from "../User";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();

  public username: string;
  public name: string;
  public age: number;
  public hasDrivingLicence: boolean = false;

  notifyParent() {
    this.childEvent.emit(new User(
      this.username,
      this.name,
      this.age,
      this.hasDrivingLicence)
    );

    this.clearAll();
  }

  clearAll() {
    this.username = null;
    this.name = null;
    this.age = null;
    this.hasDrivingLicence = null;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
