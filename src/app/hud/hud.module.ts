import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './component/logo/logo.component';
import {MapComponent} from './component/map/map.component';
import {HUDComponent} from './component/hud.component';
import {StatsComponent} from './component/stats/stats.component';

@NgModule({
  declarations: [LogoComponent, MapComponent, HUDComponent, StatsComponent],
  imports: [CommonModule],
  exports: [HUDComponent],
})
/**
 * @class HUDModule
 */
export class HUDModule {}
