import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlanet } from '../home/model/planets.interface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss']
})
export class ArticlePage implements OnInit {
  public planet: IPlanet;

  constructor(private readonly route: ActivatedRoute, private navControl: NavController) {
    this.route?.queryParams.subscribe((params) => {
      this.planet = params['planet'];
    });
  }

  ngOnInit(): void {}

  returnShadow() {
    return {
      filter: `drop-shadow(-11.9298px 14.3158px 10.7368px rgba(${this.planet.color}, 0.2)) drop-shadow(19.6842px 13.7193px 13.1228px rgba(${this.planet.color}, 0.2))`
    };
  }

  goBack() {
    this.navControl.pop();
  }
}
