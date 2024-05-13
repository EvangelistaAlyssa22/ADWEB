import { AsyncPipe, DatePipe, DecimalPipe, NgIf, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-ngpipes',
  standalone: true,
  imports: [DatePipe, AsyncPipe, SlicePipe, UpperCasePipe, DecimalPipe],
  templateUrl: './ngpipes.component.html',
  styleUrl: './ngpipes.component.css'
})
export class NgpipesComponent {

  currentTime$! : Observable<Date>;

  title: string = "Angular Pipes";

  decimal_num: number = 8.1768899;

  fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Pomegrante'];

  constructor() {
    this.currentTime$ = interval(1000).pipe(map(() => new Date()));

  }
}
