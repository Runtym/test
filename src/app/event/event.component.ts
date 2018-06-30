import { Component, OnInit, Input } from '@angular/core';
import { Observable,fromEvent } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  msPos : Observable<Event>;
  msClick :Observable<Event>;
  posX : number;
  posY : number;
  targetInfo:string;
  constructor() { }
  ngOnInit() {
    this.msPos = fromEvent(document,'mousemove');
    this.msPos.subscribe(
      (event:MouseEvent)=>{
        this.posX = event.clientX;
        this.posY = event.clientY;
      }
    );
    this.msClick = fromEvent(document,'click');
    this.msClick.subscribe(
      (event:MouseEvent)=>{
        let obj = <HTMLElement>event.target;
        this.targetInfo = `obj tag : ${obj.tagName}<br>`;
        this.targetInfo += `obj id : ${obj.id}<br>`;
        this.targetInfo += `obj text : ${obj.innerText}<br>`;
      }
    )
  }

}
