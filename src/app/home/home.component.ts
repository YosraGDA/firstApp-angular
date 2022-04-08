import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
verif= false

tab=['Tunisie','Algérie','Marroc','Yamen']
  constructor() { }
n=3
  ngOnInit(): void {
  }

}
