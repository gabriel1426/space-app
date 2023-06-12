import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
  WritableSignal
} from '@angular/core';
import { IPlanet } from '../../pages/home/model/planets.interface';

@Component({
  selector: 'app-last-view',
  templateUrl: './last-view.component.html',
  styleUrls: ['./last-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastViewComponent implements OnInit, OnChanges {
  @Input() planet: IPlanet;

  public shadow: WritableSignal<string> = signal('');

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.shadow.set(
      `drop-shadow(-11.9298px 14.3158px 10.7368px rgba(${this.planet.color}, 0.2)) drop-shadow(19.6842px 13.7193px 13.1228px rgba(${this.planet.color}, 0.2))`
    );
  }
}
