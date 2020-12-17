import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: User[]
  p: number = 1;
  
  
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.read().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }

}
