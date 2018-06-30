import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  user:User;
  userList:Array<User> = [];
  constructor() { 
    for(let i=1;i<=10;i++){
      this.user = new User({name:'test'+i,age:i});
      this.userList.push(this.user);
    }
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

  isLogin(user:User):boolean{
    if(user.id=='test'){
      if(user.pwd=='test'){
        return true;
      }
    }
    return false;
  }
}
