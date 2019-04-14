import {Component, OnInit} from '@angular/core';
import User from "./User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User [] = [];
  public initialUsers: User [] = [];
  public hasLicence: boolean; //null

  constructor() {
  }

  filterUsers() {
    this.hasLicence = !this.hasLicence;
    this.users = this.initialUsers;
    this.users = this.users.filter(x => x.hasDrivingLicence === this.hasLicence);
  }

  updateUsers(data: User) {
    this.users.push(data);
  }

  ngOnInit() {
    this.users.push(
      new User('johnd', 'John Doe', 44, true),
      new User('peterd', 'Peter Dale', 31, false),
      new User('marrys', 'Marry Smith', 30, true),
      new User('annaj', 'Anna Jones', 22, false),
    );

    this.initialUsers = this.users;
  }

}
