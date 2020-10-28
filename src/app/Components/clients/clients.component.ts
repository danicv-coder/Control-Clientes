import { IdbService } from './../../Services/idb.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private idbService: IdbService) { }

  ngOnInit(): void {
  }
generarColor(){
  let simbolos, color;
  simbolos = "0123456789ABCDEF";
  color = "#";
  let cicle = document.getElementById('cicle');

  for (let i = 0; i < 6 ; i++) {
     color = color + simbolos[Math.floor(Math.random() * 16)];
     cicle.style.backgroundColor = color;
     console.log(color);
}
}
generarLetra(){
	let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	let numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}

colorHEX(){
	let coolor = "";
	for(var i=0;i<6;i++){
    coolor = coolor + this.generarLetra() ;

	}
  return "#" + coolor;
}

indexedDb(){
  this.idbService.Items();
}

getIndexeDB(){
  this.idbService.getDemo();
}

}
