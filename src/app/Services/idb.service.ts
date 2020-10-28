import { Injectable } from '@angular/core';
import { openDB, deleteDB, wrap, unwrap } from 'idb';
import{ Item } from '../Model/item';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { transition } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class IdbService {

  constructor( private http: HttpClient) { }
  Items() {
    const headers = new HttpHeaders()
      .set('Authorization', '8825f49e-ef03-4274-9b2d-39e9163c8dae')
      .set('x-provider', 'eyJpZCI6IjlhMDIxNmRjLWU3ODMtMTFlOS05YTE1LTAyNDIwYWZmMDAwNSIsImNvZGUiOiIwMDAwMDIiLCJuYW1lIjoiT1NNIiwiYnJhbmNoIjoiMDAxIiwiYWxpYXMiOiJvc21zb2Z0LWRlbW8iLCJpZGVudGlmaWNhdGlvbiI6IlZFLVNPRlQtREVNTyIsImNvbnRhY3RQZXJzb24iOiJKb3NlIENhbGRlcm9uIiwicGhvbmUiOiIxMTMzMTIxNzQ1IiwiYWRkcmVzcyI6IlBhcmFndWF5IDEyMiwgVmlsbGEgTWFydGVsbGksIFZpY2VudGUgTG9wZXosIEJ1ZW5vcyBBaXJlcyBBcmdlbnRpbmEiLCJpbWFnZUZvbGRlclBhdGgiOiJvc20tc29mdCIsInB1YmxpY1VybCI6Im9zbS1zb2Z0LmNvbSIsInN1cHBvcnRFbWFpbCI6InZlbnRhc0Bvc20tc29mdC5jb20iLCJjdXJyZW5jeSI6IiQuIiwiZGVjaW1hbFNlcGFyYXRvciI6IiwiLCJ0aG91c2FuZFNlcGFyYXRvciI6Ii4iLCJ0YXhOYW1lIjoiSS5ULkIuTS5TIiwiY3VycmVudFVzZXJJZCI6IlBSRU1JVU0iLCJ0aW1lWm9uZSI6IkFtZXJpY2EvQ2FyYWNhcyIsImxpY2Vuc2VFeHBpcmF0aW9uIjpbMjAyMCwxMiwzMSwwLDBdLCJsaWNlbnNlU2VyaWFsIjoiREVNTyJ9');
    const path = `http://ec2-54-210-103-136.compute-1.amazonaws.com:9000/thirdparty/items`;
    return this.http
      .get<Item[]>(path, { headers })
      .subscribe(
        (items) => {
          if (items != null) {
            this.demo(items);
          }
        },
        (Response: HttpErrorResponse) => {
         /*  if (Response.error.code === this.invalidToken) {
            console.log(Response.error.code);
          } */
        }
      );
  }
  async demo(items: Item[]) {
    const db = await openDB<Item>("items", 1, {
      upgrade(db) {
        db.createObjectStore('items');
      },
    });
    let tam = items.length;
    for (let i = 0; i <tam; i ++){

      await db.put("items", items[0], items[i].code );

    }
  }
  async getDemo(){
    const db = await openDB("items", 1);
    // retrieve by key:
    let code = db.get('items', '001').then(console.log);

    // retrieve all:
    db.getAll('items').then(console.log);
    // count the total number of items in a store:
    db.count('items').then(console.log);
    //get all keys:
    db.getAllKeys('items').then(console.log);


    let transaccion = db.transaction("[items]", "readonly");
    const store = transaccion.objectStore("[items]");
    const result = await store.getKey('001');
    console.log('Get data', JSON.stringify(result));
    return result;
   /*  let almacen = transaccion.objectStore("[items]") */
    /* let cursor = almacen.openCursor(); */



}

getDataAndSend(){
  let db;
  const request = indexedDB.open('items');
  request.onerror = (event) => {
    console.log('indexedb en my web app');
  };
  request.onsuccess =  (event) => {
    db = event.target;
    this.getData(db);

}
};

getData(db){
  const transaccion = db.transaction(['items']);
}

/* async getData(){
  const db = await openDB('items', 1);
  const trasaccion = db.transaction(['items']);
  const objectStore = trasaccion.objectStore('items');
  const request = objectStore.getAll('items');
  console.log(request);



} */
}
