import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ScreenOrientation, OrientationType } from '@capawesome/capacitor-screen-orientation';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private platform: Platform) {
    this._initializeApp();
  }

  async _initializeApp() {
    await this.platform.ready();
    if (this.platform.is('capacitor')) {
      await StatusBar.setBackgroundColor({ color: '#0D6FCA' });
      await StatusBar.setStyle({ style: Style.Dark });
      await ScreenOrientation.lock({ type: OrientationType.PORTRAIT });
    }
  }
}
