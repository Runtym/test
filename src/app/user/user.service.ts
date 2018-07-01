import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  user:User;
  userList:Array<User> = [];
  private url:string='http://localhost:3000';

  constructor(protected httpC:HttpClient) {
  }
  getUsers():Observable<any>{
    return this.httpC.get(this.url + '/api/users');
  }
  getUser():User{ 
    return this.user;
  }
  getUserList():Array<User>{
    return this.userList;
  }
  setUser(user:User){
    this.userList.push(user);
  }

  isLogin(user:User):Observable<any>{
    let params = "?id=" + user.id;
    params += "&pwd=" + user.pwd;
    console.log(params);
    return this.httpC.get(this.url + '/api/login'+params);
  }
  
  getList(type:string):Observable<any>{
    return this.httpC.get(this.url + '/api/list?type=' + type);
  }
}
