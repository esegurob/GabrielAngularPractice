import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../Model/auth.service';


@Injectable()
export class AuthGuard {

  constructor(private route : Router, private auth: AuthService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if (!this.auth.authenticated){
      this.route.navigateByUrl("/Admin/main");
      return false;
    }
    return true;
  }
}
