import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  messageFlag = false;
  eventBindMessage = '';
  checkNumFlag = false;
  inputNumber:number = 0;
  numberColor:string = '';

  constructor() {
    // Property Binding for Disabled attribute
    setTimeout(() => {
      this.messageFlag = true;
    }, 2500);

    // Generate random Number
    this.inputNumber = Math.floor(Math.random() * 100);
    this.numberColor = (this.inputNumber > 50) ? 'green' : 'red';
  }

  // String Interpolation with a Property
  strInterProperty = 'String interpolation using a Property';

  // String Interpolation with a Method
  strInterMethod = 'String interpolation using a Method';
  getstrInterMethod() {
    return this.strInterMethod;
  }

  // Event Binding
  showEventBindMessage(){
    this.eventBindMessage = "Onclick Event Occured. Event Binding successful !!!";
    this.messageFlag = false;
  }

  // Two way data Binding
  twoWayDataBinding = "Two way Data-Binding";
  
  // Working with ngStyle
  changeColor(){
    return this.numberColor = (this.inputNumber > 50) ? 'green' : 'red';
  }
}
