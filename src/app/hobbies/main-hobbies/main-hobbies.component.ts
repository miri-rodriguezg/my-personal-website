import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-hobbies',
  templateUrl: './main-hobbies.component.html',
  styleUrls: ['./main-hobbies.component.scss']
})
export class MainHobbiesComponent implements OnInit {

  nav = "hobbies";

  constructor() { }

  ngOnInit(): void {
  }

}
