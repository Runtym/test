import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

class Test{
  name:string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  userList:Array<User>;
  user:User = new User();
  id:string;
  pwd:string;
  isLogin : boolean = false;
  constructor(private us:UserService) {
  }
  login():void{
    this.isLogin = this.us.isLogin(new User({id:this.id,pwd:this.pwd}));
    if(this.isLogin){
      alert('로그인에 성공하셨습니다.');
      this.viewUserList();
    }else{
      alert('아이디 비번을 확인해주세요');
    }
  }
  logout():void{
    this.isLogin = false;
  }
  viewUserList():void{
    this.userList = this.us.getUserList();
  }
  insertUser():void{
    this.us.setUser(this.user);
    this.user = new User();
  }
  changeEtc(event):void{
    console.log(event);
  }
  ngOnInit() {
  }

}
