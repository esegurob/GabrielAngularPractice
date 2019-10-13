import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../Model/auth.service';


@Component({
    templateUrl: "auth.component.html"
  })
export class AuthComponent {

  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private auth : AuthService){

  }

  authenticate(form: NgForm){
    if (form.valid){

      this.auth.authenticate(this.username, this.password).subscribe(response=>{
        if (response){
          //perform the authentication
          this.router.navigateByUrl("/admin/main");
        }
        this.errorMessage = "Authentication failed";
      });

    }
    else {
      this.errorMessage = "Form data invalid"
    }
  }
}
