import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Control-Clientes';
  public load: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
this.load = true;
    },5000);

  }
}
