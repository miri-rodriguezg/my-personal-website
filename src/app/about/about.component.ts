import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  downloadResume(){
    window.open('/assets/files/resume.pdf', '_blank');
  }
  

  ngOnInit(): void {
  }

}
