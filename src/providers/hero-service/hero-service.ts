import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

/*
  Generated class for the HeroService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroService {
  data: any;
  constructor(public http: Http) {
    console.log('Hello HeroService');
  }

  

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }


    return new Promise(resolve => {

      let md5 = new Md5();
      
      var timestamp = Number(new Date());var timestamp = Number(new Date()); 
      var hash = Md5.hashStr(timestamp + 'e1e1f8fe4307b069693c1477fafce2bfea00434f5e77cf1e4462dceaef0c38d9bc0b6233');

      this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=name&apikey=5e77cf1e4462dceaef0c38d9bc0b6233&hash=${hash}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  } 
  getDescription(id: number) {
    return new Promise(resolve => {
      let md5 = new Md5();

      var timestamp = Number(new Date());
      var hash = Md5.hashStr(
        timestamp +
          "ebd407c102ea3f1262b8dd370cfa04d4a132a867d8b23f3429d72898aaffd1a321761b4a"
      );

      this.http
        .get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&orderBy=name&limit=20&apikey=d8b23f3429d72898aaffd1a321761b4a&hash=${hash}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }


}

