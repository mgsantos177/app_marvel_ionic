import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroService } from '../../providers/hero-service/hero-service';

/**
 * Generated class for the PersonagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personagens',
  templateUrl: 'personagens.html',
})
export class PersonagensPage {
  public obj: any;
  public heroes: any;
  
  constructor(public navCtrl: NavController, public heroService: HeroService) {
    this.getAllHeroes();
  }

  getAllHeroes() {
    this.heroService.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;
      });
  }
  getDescription(id:number){
    console.log(id);
    this.navCtrl.push("DescriptionPage", {
      id: id
    })
  }

}



