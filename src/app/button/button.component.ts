import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttonTitle = "Shuffle Suggestions"

  fetchBtn = () => {
   const val1 = Math.floor(Math.random() * 100);
   alert(val1);
  }
}
