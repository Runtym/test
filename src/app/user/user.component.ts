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
    this.us.isLogin(new User({id:this.id, pwd:this.pwd})).subscribe(
      datas=>{
        this.isLogin = datas.isLogin;
        if(this.isLogin){
          alert('로그인에 성공하셨습니다.');
          this.viewUserList();
        }else{
          alert('아이디 비번을 확인해주세요');
        }
      },
      errs=>{
        console.log(errs);
      }
    );
  }
  logout():void{
    this.isLogin = false;
  }
  viewUserList():void{
    this.us.getUsers().subscribe(
      datas=>{
        console.log(datas);
        this.userList = datas;
      },
      errs=>{
        console.log(errs);
      }
    )
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

  chSelect(event:Event):void{
    let obj:HTMLInputElement = <HTMLInputElement>event.target;
    alert(obj.value);
    this.us.getList(obj.value).subscribe(
      datas=>{
        console.log(datas);
        this.userList = datas[obj.value];
      },
      errs=>{
        console.log(errs);
      }
    )
  }
}
