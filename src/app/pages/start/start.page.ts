import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GestureController, NavController } from '@ionic/angular';
import { AppRoutes } from '../../core/const/app-routes';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss']
})
export class StartPage implements AfterViewInit {
  @ViewChild('drawer', { read: ElementRef }) drawer: ElementRef;
  @ViewChild('text', { read: ElementRef }) text: ElementRef;

  constructor(private gestureController: GestureController, private navControl: NavController) {}

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
