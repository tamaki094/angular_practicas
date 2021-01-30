import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.sass'
    ,'/node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {

  constructor(private _user: UserService, private  _api: ApiService) 
  { 
    
   
  }

  ngOnInit(): void 
  {
  }

  login()
  {
    const user = (document.querySelector('#username') as HTMLInputElement).value
    const password = (document.querySelector('#exampleInputPassword1') as HTMLInputElement).value
  
    this._api.login(user, password).subscribe(response => {
      if(response.success)
      {
        this._user.user = response.user;
        console.log(this._user);
      }
    });
  }

}
