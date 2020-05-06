import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-work',
  templateUrl: './main-work.component.html',
  styleUrls: ['./main-work.component.scss']
})
export class MainWorkComponent implements OnInit {

  nav = "work";

  constructor() { }

  ngOnInit(): void {
  }

}
