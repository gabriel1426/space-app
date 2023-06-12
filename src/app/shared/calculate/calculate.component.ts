import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { GestureController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements AfterViewInit {
  @Input() gravedad: string;
  @Input() name: string;

  @ViewChild('drawer', { read: ElementRef }) drawer: ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter<boolean>();

  private isKeyBoardOpen: boolean = false;
  public isOpen: boolean = false;
  public openHeight: number = 0;
  public pesoActual: number;
  public pesoTotal: string | number = 0;
  constructor(private platform: Platform, private gestureCtrl: GestureController, private cdr: ChangeDetectorRef) {}

  async ngAfterViewInit() {
    const drawer = this.drawer.nativeElement;
    this.openHeight = (this.platform.height() / 100) * 50;
    console.log(this.openHeight);
    const gesture = await this.gestureCtrl.create({
      el: drawer,
      gestureName: 'swipe',
      direction: 'y',
      onMove: (ev) => {
        if (!this.isKeyBoardOpen) {
          if (ev.deltaY < -this.openHeight) return;
          drawer.style.transform = `translateY(${ev.deltaY}px)`;
        }
      },
      onEnd: (ev) => {
        if (!this.isKeyBoardOpen) {
          if (ev.deltaY < -1) {
            drawer.style.transition = '.4s ease-out';
            drawer.style.transform = `translateY(${-this.openHeight}px)`;
            this.openState.emit(true);
            this.isOpen = true;
          } else if (ev.deltaY > 1) {
            drawer.style.transition = '.4s ease-out';
            drawer.style.transform = '';
            this.openState.emit(false);
            this.isOpen = false;
          }
        }
      }
    });

    gesture.enable(true);

    this.platform.keyboardDidShow.subscribe(() => {
      this.isKeyBoardOpen = true;
      drawer.style.bottom = '-90vh';
      drawer.style.transition = '';
    });

    this.platform.keyboardDidHide.subscribe(() => {
      this.isKeyBoardOpen = false;
      drawer.style.bottom = '';
      drawer.style.transition = '.4s ease-out';
    });
  }

  toggleDrawer() {
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);
    if (this.isOpen) {
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = '';
      this.isOpen = false;
    } else {
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;
      this.isOpen = true;
    }
  }

  calcularPeso() {
    if (this.pesoActual && !isNaN(this.pesoActual)) {
      this.pesoTotal = ((Number(this.gravedad) * Number(this.pesoActual)) / 9.8).toFixed(2) || 0;
      this.cdr.detectChanges();
    }
  }
}
