import { Injectable } from '@angular/core';
import { Test } from './test';

@Injectable()
export class TestService {
  testList:Array<Test> = [];
  constructor() { 

  }

  getTestList():Array<Test>{
    let test:Test = new Test({name:"abc",age:3});
    this.testList.push(test);
    return this.testList;
  }
}
