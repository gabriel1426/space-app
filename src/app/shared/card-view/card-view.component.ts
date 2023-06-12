import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPlanet } from '../../pages/home/model/planets.interface';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {
  @Input() planets: IPlanet[];

  @Output() selected: EventEmitter<IPlanet> = new EventEmitter<IPlanet>();

  constructor() {}

  returnShadow(planet: IPlanet) {
    return {
      filter: `drop-shadow(-11.9298px 14.3158px 10.7368px rgba(${planet.color}, 0.2)) drop-shadow(19.6842px 13.7193px 13.1228px rgba(${planet.color}, 0.2))`
    };
  }

  planetSelected(planet: IPlanet) {
    this.selected.emit(planet);
  }
}
