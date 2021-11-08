import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  // Selectors can be also referenced by using classes { .app-navbar } OR attributes { [app-navbar] }, above we are referencing selectors directly by the element.
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
