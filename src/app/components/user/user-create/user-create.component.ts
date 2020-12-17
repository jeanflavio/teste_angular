import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {

    email: '', 
    first_name: '',
    last_name: ''

  }
  
  constructor(private userService: UserService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Usuário Criado!')
      this.router.navigate(['/users'])
    })


    
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }

}
