import { Component, ChangeDetectorRef, WritableSignal } from '@angular/core';
import { IPlanet } from './model/planets.interface';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { signal } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { AppRoutes } from '../../core/const/app-routes';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('faceAnimation', [transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))])])
  ]
})
export class HomePage {
  public swiperView: WritableSignal<boolean> = signal(true);
  public planets: IPlanet[];
  public lastPlanet: WritableSignal<IPlanet>;

  constructor(
    private loadingCtrl: LoadingController,
    private translateService: TranslateService,
    private navControl: NavController,
    private cdr: ChangeDetectorRef,
    private platform: Platform
  ) {
    this.planets = this.translateService.instant('Planets');
    this.planets[0].isActivated = true;
    this.lastPlanet = signal(this.planets[0]);
  }

  async ionViewDidEnter() {
    if (this.platform.is('capacitor')) {
      await StatusBar.setBackgroundColor({ color: '#0D6FCA' });
      await StatusBar.setStyle({ style: Style.Dark });
    }
  }

  cardView() {
    this.swiperView.set(true);
    this.cdr.detectChanges();
  }

  slideView() {
    this.swiperView.set(false);
    this.cdr.detectChanges();
  }

  goLast() {
    this.planetSelected(this.lastPlanet());
  }

  planetSelected(planet: IPlanet) {
    const options: NavigationOptions = {
      queryParams: {
        planet: planet
      }
    };
    this.navControl.navigateForward(AppRoutes.article, options);
    this.lastPlanet.set(planet);
  }
}
