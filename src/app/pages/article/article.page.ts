import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlanet } from '../home/model/planets.interface';
import { NavController, Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss']
})
export class ArticlePage {
  public planet: IPlanet;

  constructor(private readonly route: ActivatedRoute, private router: Router, private platform: Platform) {
    this.route?.queryParams.subscribe((params) => {
      this.planet = params['planet'];
    });
  }

  async ionViewDidEnter() {
    if (this.platform.is('capacitor')) {
      await StatusBar.setBackgroundColor({ color: '#FFFFFF' });
      await StatusBar.setStyle({ style: Style.Light });
    }
  }

  returnShadow() {
    return {
      filter: `drop-shadow(-11.9298px 14.3158px 10.7368px rgba(${this.planet.color}, 0.2)) drop-shadow(19.6842px 13.7193px 13.1228px rgba(${this.planet.color}, 0.2))`
    };
  }

  goBack() {
    this.router.navigate(['home'], { replaceUrl: true });
  }
}
