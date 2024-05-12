import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  appName = "This is an Interpolation example"
  clientName = "Alyssa"
  appliedCSSClass = "green"
  noteappliedCSSClass = false;
  myColor = "red"

  showData($event:any){
    console.log("button is clicked"); if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
