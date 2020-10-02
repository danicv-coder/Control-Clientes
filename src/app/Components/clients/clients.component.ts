import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
generarColor(){
  let simbolos, color;
  simbolos = "0123456789ABCDEF";
  color = "#";

  for (let i = 0; i < 6 ; i++) {
     color = color + simbolos[Math.floor(Math.random() * 16)];
     document.body.style.background = color;
     console.log(color);
}
}
}
