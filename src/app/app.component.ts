import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '난 AppComponent에서 생성!';
  headerTitle:string = 'Angular 6 with Bootstrap 4';
  footerContent:string = '전 푸터에요.';
}
