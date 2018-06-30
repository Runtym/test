import { Component, OnInit } from '@angular/core';
import { Test } from './test';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers:[TestService]
})
export class TestComponent implements OnInit {
  testList:Array<Test>;
  constructor(private ts:TestService) { 
    this.testList = ts.getTestList();
  }


  ngOnInit() {
  }

}
