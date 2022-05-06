import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.getUsers();
  }

 /** Metodo para Listar usuarios */
  async getUsers(){
    const data = await this.userService.list();
    console.log(data);
    this.users = (data as any).users;
  }
}
