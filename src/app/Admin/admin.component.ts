import {Component} from '@angular/core';
import {AuthService} from '../../Model/auth.service';
import {Router} from '@angular/router';

//Decorator to make it a component
@Component({
  templateUrl: 'admin.component.html'
})
export class AdminComponent {
  constructor(private auth: AuthService, private router: Router) {

  }

  //this is for signing out
  logout() {
    this.auth.clear();
    this.router.navigateByUrl("/");
  }
}
