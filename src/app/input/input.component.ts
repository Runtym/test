import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  clickCnt:number = 0;
  str1:string='';
  str2:string='';
  result:number;
  constructor() { }

  ngOnInit() {
  }
  
  clickBtn(num:number):void{
    this.clickCnt += num;
  }

  upKey1(event:KeyboardEvent){
    this.str1 = (<HTMLInputElement>event.target).value;
  }

  upKey2(str:string){
    this.str2 = str;
  }
  sum(n1:string,n2:string,op:string){
    if(op=='+'){
      this.result = parseInt(n1) + parseInt(n2);
    }else if(op=='-'){
      this.result = parseInt(n1) - parseInt(n2);
    }else if(op=='/'){
      this.result = parseInt(n1) / parseInt(n2);
    }else if(op=='*'){
      this.result = parseInt(n1) * parseInt(n2);
    }
  }
  parseInt(str:string):number{
    return parseInt(str);
  }

  checkValue(event:Event){
    let obj:HTMLSelectElement = <HTMLSelectElement>event.target;
    alert(obj.value);
  }

  checkValue1(str:string){
    alert(str);
  }
}
