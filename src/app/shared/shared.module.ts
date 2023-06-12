import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SwiperViewComponent } from './swiper-view/swiper-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardViewComponent } from './card-view/card-view.component';
import { LastViewComponent } from './last-view/last-view.component';
import { CalculateComponent } from './calculate/calculate.component';
import { FormsModule } from '@angular/forms';

const components = [SwiperViewComponent, CardViewComponent, LastViewComponent, CalculateComponent];
@NgModule({
  imports: [CommonModule, IonicModule, TranslateModule.forChild(), NgIf, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [...components],
  exports: [CommonModule, IonicModule, TranslateModule, ...components]
})
export class SharedModule {}
