import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss']
})
export class DirectComponent implements OnInit {
  animal:Animal
  animalList:Array<Animal>;
  constructor() { 
    this.animalList = [];
    this.animal = new Animal('소',10);
    this.animalList.push(this.animal);
    this.animal = new Animal('고양이',5);
    this.animalList.push(this.animal);
    this.animal = new Animal('강아지',10);
    this.animalList.push(this.animal);
    this.animal = new Animal('거북이',10);
    this.animalList.push(this.animal);
    this.animal = new Animal('호랑이',10);
    this.animalList.push(this.animal);
  }

  ngOnInit() {
  }

}
