import { Component, OnInit } from '@angular/core';

class Log{
  num:number;
  text:string;
}
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  logList:Array<Log> = [];
  constructor() { }

  ngOnInit() {
  }
  setLog(text:string){
    let log:Log = new Log();
    log.num = this.logList.length+1;
    log.text = text;
    this.logList.push(log);
  }
  test():void{
    this.logList = [];
    setTimeout(()=>{
      this.setLog('1번째')
    },1500);
    setTimeout(()=>{
      this.setLog('2번째')
    },500);
    setTimeout(()=>{
      this.setLog('3번째')
    },300);
  }

  getPromise(text:string,time:number):Promise<{}>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        this.setLog(text);
        resolve();
      },time);
    });
  }
  syncFunc():void{
    this.logList = [];
    let f1 = this.getPromise.bind(this,'1번째',1500);
    let f2 = this.getPromise.bind(this,'2번째',500);
    let f3 = this.getPromise.bind(this,'3번째',300);
    f1().
    then(f2).
    then(f3);
  }

}
