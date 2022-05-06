import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email:any;
  password:any;
  constructor(private authService:AuthService, private router : Router) { }

  ngOnInit(): void {
  }


  async login(){
    const params = {Email: this.email, Password: this.password}
    const data = await this.authService.auth(params);
    console.log(data);
    if((data as any).user){
       this.authService.setUser((data as any).user);
       this.router.navigate(['orders']);
    }
  }

}
