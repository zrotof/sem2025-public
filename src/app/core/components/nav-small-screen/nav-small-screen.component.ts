import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-small-screen',
  templateUrl: './nav-small-screen.component.html',
  styleUrls: ['./nav-small-screen.component.scss'],
  standalone : true,
  imports : [
    RouterLinkActive
  ]
})
export class NavSmallScreenComponent implements OnInit {

  @Output() onNavigationOnSmallScreenEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onNavigationClicked(){
    this.onNavigationOnSmallScreenEvent.emit(false);
  }

}
