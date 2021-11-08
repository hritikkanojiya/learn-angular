import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  messageFlag = false;
  eventBindMessage = '';

  constructor() {
    // Property Binding for Disabled attribute
    setTimeout(() => {
      this.messageFlag = true;
    }, 2500);
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
  twoWayDataBinding = "Hello Angular !!!"
}
