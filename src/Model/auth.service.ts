import {Injectable} from '@angular/core';
import {RestDatasource} from './rest.datasource';


@Injectable()
export class AuthService {

  constructor(private datasource : RestDatasource){

  }
  //Authentication methods
  //to retrieve username
  authenticate(username: string, password: string){
    return this.datasource.authenticate(username,password);
  }

//  authenticate property getter only
  get authenticated(): boolean{
    return this.datasource.authToken != null;
  }

//  clear to remove token from datasource
  clear(){
    this.datasource.authToken = null;
  }
}
