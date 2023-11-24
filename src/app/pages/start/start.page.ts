import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GestureController, NavController, Platform } from '@ionic/angular';
import { AppRoutes } from '../../core/const/app-routes';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss']
})
export class StartPage implements AfterViewInit {
  @ViewChild('drawer', { read: ElementRef }) drawer: ElementRef;
  @ViewChild('text', { read: ElementRef }) text: ElementRef;

  constructor(
    private gestureController: GestureController,
    private navControl: NavController,
    private platform: Platform
  ) {}

  async ionViewDidEnter() {
    if (this.platform.is('capacitor')) {
      await StatusBar.setBackgroundColor({ color: '#0D6FCA' });
      await StatusBar.setStyle({ style: Style.Dark });
      await SplashScreen.hide();
    }
  }

  async ngAfterViewInit() {
    const drawer = this.drawer.nativeElement;
    const gesture = await this.gestureController.create({
      el: drawer,
      gestureName: 'swipe',
      direction: 'x',
      onMove: () => {
        drawer.style.width = '102%';
        this.text.nativeElement.style.zIndex = -1;
      },
      onEnd: () => {
        this.navControl.navigateRoot(`${AppRoutes.home}`);
      }
    });

    gesture.enable(true);
  }
}
